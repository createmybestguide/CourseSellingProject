import { google } from "googleapis";
import { NextResponse } from "next/server";

type LeadPayload = {
  mode?: string;
  name?: string;
  email?: string;
  phone?: string;
  course?: string;
  message?: string;
  paymentType?: string;
  gateway?: string;
};

const sheetTabs: Record<string, string> = {
  contact: "Contact Us",
  enroll: "Enquiries",
  callback: "Callbacks",
  register: "Registrations",
  payment: "Payments",
};

const headers: Record<string, string[]> = {
  contact: ["Submitted At", "Name", "Email", "Phone", "Course", "Message"],
  enroll: ["Submitted At", "Name", "Email", "Phone", "Course", "Message"],
  callback: ["Submitted At", "Name", "Email", "Phone", "Course", "Message"],
  register: ["Submitted At", "Name", "Email", "Phone", "Course", "Message"],
  payment: ["Submitted At", "Name", "Email", "Phone", "Course", "Payment Type", "Gateway"],
};

function getPrivateKey() {
  return process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, "\n");
}

function valuesForPayload(payload: LeadPayload) {
  const submittedAt = new Date().toISOString();
  if (payload.mode === "payment") {
    return [
      submittedAt,
      payload.name ?? "",
      payload.email ?? "",
      payload.phone ?? "",
      payload.course ?? "",
      payload.paymentType ?? "",
      payload.gateway ?? "",
    ];
  }

  return [
    submittedAt,
    payload.name ?? "",
    payload.email ?? "",
    payload.phone ?? "",
    payload.course ?? "",
    payload.message ?? "",
  ];
}

async function getSheetsClient() {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  console.log(clientEmail,'clientEmail');
  
  const privateKey = getPrivateKey();

  if (!clientEmail || !privateKey || !process.env.GOOGLE_SHEETS_SPREADSHEET_ID) {
    throw new Error("Google Sheets environment variables are not configured.");
  }

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth });
}

async function ensureSheetAndHeaders(mode: string, tabName: string) {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const sheets = await getSheetsClient();
  const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId });
  const exists = spreadsheet.data.sheets?.some((sheet) => sheet.properties?.title === tabName);

  if (!exists) {
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: [{ addSheet: { properties: { title: tabName } } }],
      },
    });
  }

  const headerResponse = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: `'${tabName}'!1:1`,
  });

  if (!headerResponse.data.values?.length) {
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: `'${tabName}'!A1`,
      valueInputOption: "USER_ENTERED",
      requestBody: { values: [headers[mode]] },
    });
  }

  return sheets;
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as LeadPayload;
    const mode = payload.mode ?? "";
    const tabName = sheetTabs[mode];

    if (!tabName || !headers[mode]) {
      return NextResponse.json({ message: "Unsupported form type." }, { status: 400 });
    }

    if (!payload.email || !payload.name || !payload.phone) {
      return NextResponse.json({ message: "Required form fields are missing." }, { status: 400 });
    }

    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
    const sheets = await ensureSheetAndHeaders(mode, tabName);

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `'${tabName}'!A1`,
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: { values: [valuesForPayload(payload)] },
    });

    return NextResponse.json({ message: "Submitted successfully." });
  } catch (error) {
    console.error("Lead submission failed", error);
    return NextResponse.json(
      { message: "Unable to submit right now. Please try again later." },
      { status: 500 },
    );
  }
}
