import { Handler } from "@netlify/functions";
import { google } from "googleapis";

const handler: Handler = async (event) => {
    // CORS headers
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Methods': 'GET, OPTIONS'
    };

    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers, body: '' };
    }

    if (event.httpMethod !== 'GET') {
        return { statusCode: 405, headers, body: "Method Not Allowed" };
    }

    // --- GOOGLE DRIVE INTEGRATION ---
    const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    let rawKey = process.env.GOOGLE_PRIVATE_KEY;
    const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;

    if (!email || !rawKey || !folderId) {
        console.warn("Google Drive credentials or Folder ID missing in ENV.");
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: "Configuration Error" })
        };
    }

    let finalKey = rawKey.trim();

    // Robust parsing for common .env quote issues and JSON pasted into the key variable
    while (finalKey.startsWith('"') || finalKey.startsWith("'")) {
        finalKey = finalKey.substring(1).trim();
    }
    while (finalKey.endsWith('"') || finalKey.endsWith("'")) {
        finalKey = finalKey.substring(0, finalKey.length - 1).trim();
    }

    if (finalKey.startsWith('{')) {
        try {
            const json = JSON.parse(finalKey);
            if (json.private_key) {
                finalKey = json.private_key;
            }
        } catch (e) {
            // Not JSON or parse failed, use as is
        }
    }

    const formattedKey = finalKey.replace(/\\n/g, '\n');

    try {
        const auth = new google.auth.JWT({
            email,
            key: formattedKey,
            scopes: ['https://www.googleapis.com/auth/drive.readonly']
        });

        await auth.authorize();
        const drive = google.drive({ version: 'v3', auth });

        const response = await drive.files.list({
            q: `'${folderId}' in parents and trashed = false and mimeType = 'application/pdf'`,
            fields: 'files(id, name, webContentLink, webViewLink, createdTime)',
            orderBy: 'name',
            pageSize: 1000
        });

        const driveSheets = (response.data.files || []).map((file, index) => ({
            id: `drive-${file.id || index}`,
            name: (file.name || "Sin nombre").replace(/\.[^/.]+$/, ""), // Remove .pdf extension
            url: file.webViewLink || file.webContentLink,
            date: file.createdTime ? file.createdTime.split('T')[0] : new Date().toISOString().split('T')[0],
            source: 'drive'
        }));

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify(driveSheets),
        };

    } catch (error) {
        console.error("Critical Google Drive Error:", error.message || error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: "Operation failed", details: error.toString() }),
        };
    }
};

export { handler };
