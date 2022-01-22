import query from '../db/connection.js';

export async function getAllComments() {
  const result = await query(`SELECT * FROM comments;`);
  return result.rows;
}
