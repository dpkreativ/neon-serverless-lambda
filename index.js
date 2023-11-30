import { neon } from '@neondatabase/serverless';

/**
 * Handles the incoming event to retrieve data from the 'cars' table.
 * @param {object} event - The event object representing the incoming request.
 * @returns {Promise<object>} - A Promise containing the HTTP response object.
 */
export async function handler(event) {
  try {
    // Creating an SQL connection using 'neon' and the provided DATABASE_URL from environment variables
    const sql = neon(process.env.DATABASE_URL);

    // Executing an SQL query to retrieve all rows from the 'cars' table
    const rows = await sql('SELECT * from cars');

    // Logging the retrieved rows to the console
    console.log(rows);

    // Returning a successful response with status code 200 and the retrieved data in JSON format
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Successful',
        data: rows,
      }),
    };
  } catch (err) {
    // Catching and logging any errors that occur during the process
    console.log('Error', err);
  }
}
