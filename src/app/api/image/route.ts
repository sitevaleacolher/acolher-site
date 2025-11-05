// ...existing code...
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { promisify } from "util";
import crypto from "crypto";

const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);
const stat = promisify(fs.stat);
const readdir = promisify(fs.readdir);

const CACHE_DIR = path.join(process.cwd(), ".next", "cache", "drive-images");

const CACHE_TTL = 24 * 60 * 60 * 1000;

if (!fs.existsSync(CACHE_DIR)) {
  fs.mkdirSync(CACHE_DIR, { recursive: true });
}

function sha256(input: string) {
  return crypto.createHash("sha256").update(input).digest("hex");
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  let id = searchParams.get("id");
  const urlParam = searchParams.get("url");

  if (!id && !urlParam) {
    return NextResponse.json({ error: "Missing id or url" }, { status: 400 });
  }

  let driveUrl: string | null = null;

  if (id) {
    driveUrl = `https://drive.google.com/uc?export=download&id=${id}`;
  } else if (urlParam) {
    const match = urlParam.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (match) {
      const extracted = match[1];
      driveUrl = `https://drive.google.com/uc?export=download&id=${extracted}`;
      id = extracted;
    } else {
      driveUrl = urlParam;
    }
  }

  if (!driveUrl) {
    return NextResponse.json(
      { error: "Could not determine image URL" },
      { status: 400 }
    );
  }

  const cacheKey = sha256(driveUrl);
  const dataPath = path.join(CACHE_DIR, `${cacheKey}.bin`);
  const metaPath = path.join(CACHE_DIR, `${cacheKey}.meta.json`);

  try {
    const fileStats = await stat(dataPath);
    const age = Date.now() - fileStats.mtime.getTime();

    if (age < CACHE_TTL) {
      const fileData = await readFile(dataPath);
      let contentType = "image/jpeg";
      try {
        const metaRaw = await readFile(metaPath, "utf8");
        const meta = JSON.parse(metaRaw);
        if (meta && meta.contentType) contentType = meta.contentType;
      } catch {}

      return new NextResponse(fileData, {
        headers: {
          "Content-Type": contentType,
          "Cache-Control": "public, max-age=86400",
          "X-Cache": "HIT",
        },
      });
    }
  } catch {}

  const response = await fetch(driveUrl, {
    headers: { "User-Agent": "Mozilla/5.0" },
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "Failed to fetch image" },
      { status: response.status }
    );
  }

  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const contentType = response.headers.get("content-type") || "image/jpeg";

  try {
    await writeFile(dataPath, buffer);
    const meta = {
      contentType,
      sourceUrl: driveUrl,
      originalId: id || null,
      cachedAt: new Date().toISOString(),
    };
    await writeFile(metaPath, JSON.stringify(meta), "utf8");
  } catch (err) {
    console.error("Failed to write cache", err);
  }

  return new NextResponse(buffer, {
    headers: {
      "Content-Type": contentType,
      "Cache-Control": "public, max-age=86400",
      "X-Cache": "MISS",
    },
  });
}
