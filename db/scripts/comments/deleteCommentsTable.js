import query from '../../connection.js';

async function deleteCommentsTable() {
  const res = await query('DROP TABLE comments');
  console.log('Table comments deleted', res);
}
deleteCommentsTable();
