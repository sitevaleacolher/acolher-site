import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function GET() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  const spreadsheetId = process.env.GOOGLE_SHEETS_SHEET_ID!;

  try {
    const meta = await sheets.spreadsheets.get({
      spreadsheetId,
    });

    const sheetNames = meta.data.sheets?.map((s) => s.properties?.title) || [];

    const results = await Promise.all(
      sheetNames.map(async (name) => {
        const res = await sheets.spreadsheets.values.get({
          spreadsheetId,
          range: `${name}!A:Z`,
        });

        const rows = res.data.values;
        if (!rows || rows.length === 0) return [name, []];

        const [headers, ...data] = rows;
        const formatted = data.map((row) =>
          Object.fromEntries(headers.map((h, i) => [h, row[i] || ""]))
        );

        return [name, formatted];
      })
    );

    const allSheets = Object.fromEntries(results);

    return NextResponse.json(allSheets);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Erro ao acessar Google Sheets:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
