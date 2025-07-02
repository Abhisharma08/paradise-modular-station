"use server";

import { google } from "googleapis";

/**
 * @fileOverview Saves lead data to a Google Sheet.
 *
 * Prerequisites:
 * 1. A Google Sheet must be created.
 * 2. In that sheet, a tab (sheet) named "Leads" must exist.
 * 3. The first row of the "Leads" sheet must contain the following headers in order:
 *    ['Timestamp', 'Name', 'Mobile', 'Email', 'City', 'Designation']
 * 4. A Google Service Account must be created with Editor access to the spreadsheet.
 *
 * The following environment variables must be set in your project:
 * - GOOGLE_SHEETS_CLIENT_EMAIL: The email address of the Google service account.
 * - GOOGLE_SHEETS_PRIVATE_KEY: The private key for the service account. Remember to format it correctly (e.g., replace newlines with `\\n`).
 * - GOOGLE_SHEETS_SHEET_ID: The ID of the Google Sheet (from its URL).
 *
 * @param data The lead data, expected to have name, mobile, email, city, and designation.
 * @returns An object with success status and a message.
 */
export async function saveToSheet(data: { [key: string]: unknown }) {
  try {
    const client_email = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
    const private_key = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n');
    const spreadsheetId = process.env.GOOGLE_SHEETS_SHEET_ID;

    if (!client_email || !private_key || !spreadsheetId) {
      console.error("Google Sheets API credentials are not configured in environment variables.");
      return { success: false, message: "Server configuration error." };
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email,
        private_key,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    
    const sheetName = "Leads";
    
    // The order of values must match the header row in your Google Sheet.
    const newRow = [
      new Date().toISOString(),
      data.name || "",
      data.mobile || "",
      data.email || "",
      data.city || "",
      data.designation || "",
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetName}!A:F`, // Append after the last row with data in the specified range.
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [newRow],
      },
    });

    return { success: true, message: "Data saved successfully." };
  } catch (error) {
    console.error("Error saving to Google Sheet:", error);
    // Avoid exposing detailed internal errors to the client.
    return { success: false, message: "A server error occurred while saving the data." };
  }
}
