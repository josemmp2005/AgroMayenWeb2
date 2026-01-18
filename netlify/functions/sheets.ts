import { Handler } from "@netlify/functions";
import { Client } from "pg";

const handler: Handler = async (event, context) => {
    // CORS headers
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
    };

    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers, body: '' };
    }

    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false }
    });

    try {
        await client.connect();

        const { httpMethod, body } = event;
        const user = context.clientContext?.user; // Netlify Identity user

        // GET: Fetch all sheets
        if (httpMethod === 'GET') {
            const result = await client.query('SELECT * FROM technical_sheets ORDER BY created_at DESC');
            await client.end();
            return {
                statusCode: 200,
                headers,
                body: JSON.stringify(result.rows),
            };
        }

        // AUTH CHECK for non-GET methods
        // Note: locally context.clientContext.user might be missing without netlify dev
        // For now we assume if header is present we trust (or verify properly if production)
        // But Netlify Functions + Identity automatically validates the token if sent in Authorization header
        // and populates context.clientContext.user
        if (!user) {
            await client.end();
            return { statusCode: 401, headers, body: "Unauthorized" };
        }

        // POST: Create sheet
        if (httpMethod === 'POST' && body) {
            const { name, url } = JSON.parse(body);
            const result = await client.query(
                'INSERT INTO technical_sheets (name, url) VALUES ($1, $2) RETURNING *',
                [name, url]
            );
            await client.end();
            return {
                statusCode: 201,
                headers,
                body: JSON.stringify(result.rows[0]),
            };
        }

        // PUT: Update sheet
        if (httpMethod === 'PUT' && body) {
            const { id, name, url } = JSON.parse(body);
            const result = await client.query(
                'UPDATE technical_sheets SET name = $1, url = $2 WHERE id = $3 RETURNING *',
                [name, url, id]
            );
            await client.end();
            return {
                statusCode: 200,
                headers,
                body: JSON.stringify(result.rows[0]),
            };
        }

        // DELETE: Delete sheet
        if (httpMethod === 'DELETE' && body) {
            const { id } = JSON.parse(body);
            await client.query('DELETE FROM technical_sheets WHERE id = $1', [id]);
            await client.end();
            return {
                statusCode: 200,
                headers,
                body: JSON.stringify({ message: "Deleted" }),
            };
        }

        await client.end();
        return { statusCode: 405, headers, body: "Method Not Allowed" };

    } catch (error) {
        console.error('Database Error:', error);
        await client.end();
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: "Database connection failed", details: error.toString() }),
        };
    }
};

export { handler };
