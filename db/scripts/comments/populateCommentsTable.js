import query from '../../connection.js';
import comments from '../../../data/comments.js';

async function populateCommentsTable() {
  for (let i = 0; i < comments.length; i++) {
    const firstName = comments[i].first_name;
    const lastName = comments[i].last_name;
    const jobTitle = comments[i].job_title;
    const comment = comments[i].comment;

    const res = await query(
      `INSERT INTO comments (first_name, second_name, job_title, comment) VALUES ($1, $2, $3, $4)`,
      [firstName, lastName, jobTitle, comment]
    );
    console.log('comments table populated', res);
  }
}
populateCommentsTable();
