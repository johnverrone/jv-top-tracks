import { google } from 'googleapis';

export type Track = {
  title: string;
  artist: string;
  album: string;
  art?: string;
  spotify?: string;
  notes?: string;
};

export async function getTracks() {
  const scopes = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
  const jwt = new google.auth.JWT(
    process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    undefined,
    process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    scopes
  );

  const sheets = google.sheets({ version: 'v4', auth: jwt });
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SPREADSHEET_ID,
    range: '2021',
  });

  const rows = response.data.values;

  if (rows && rows.length > 1) {
    return rows.slice(1).map((row) => ({
      title: row[0],
      artist: row[1],
      album: row[2],
      art: row[3],
      spotify: row[4],
      notes: row[5],
    }));
  }

  return [];
}
