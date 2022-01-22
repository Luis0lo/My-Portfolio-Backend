import query from '../db/connection.js';

export async function getAllComments() {
  const result = await query(`SELECT * FROM comments;`);
  return result.rows;
}

export async function createNewComment({
  firstName,
  lastName,
  jobTitle,
  comment,
}) {
  const result = await query(
    `INSERT INTO comments (first_name, last_name, job_title, comment) VALUES ($1, $2, $3, $4) RETURNING first_name, last_name, job_title, comment;`,
    [firstName, lastName, jobTitle, comment]
  );
  return result.rows;
}

export async function updateCommentById(
  { firstName, lastName, jobTitle, comment },
  { id }
) {
  const result = await query(
    `UPDATE comments SET first_name = $1, last_name = $2, job_title = $3, comment = $4 WHERE id = $5 RETURNING id, first_name, last_name, job_title, comment;`,
    [firstName, lastName, jobTitle, comment, id]
  );
  return result.rows;
}

export async function deleteCommentById({ id }) {
  const result = await query(
    `DELETE FROM comments where id = $1 RETURNING *;`,
    [id]
  );
  return result.rows;
}
