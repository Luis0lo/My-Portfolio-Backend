import query from '../../connection.js';

async function createCommentsTable() {
  const res = await query(
    `CREATE TABLE IF NOT EXISTS comments (id SERIAL PRIMARY KEY, first_name TEXT, second_name TEXT, job_title TEXT, comment TEXT);`
  );
  console.log('comments table created', res);
}

createCommentsTable();
