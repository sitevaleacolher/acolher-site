import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sheetName = searchParams.get("sheet") || "Home";

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
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: `${sheetName}!A:Z`,
    });

    const rows = response.data.values;
    if (!rows || rows.length === 0) {
      return NextResponse.json(
        { message: "Nenhum dado encontrado" },
        { status: 404 }
      );
    }

    const [headers, ...data] = rows;
    const formatted = data.map((row) =>
      Object.fromEntries(headers.map((h, i) => [h, row[i] || ""]))
    );

    return NextResponse.json({ sheet: sheetName, data: formatted });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Erro ao acessar Google Sheets:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
