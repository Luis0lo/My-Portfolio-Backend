import query from '../../connection.js';

async function deleteCommentsTable() {
  const res = await query('DELETE FROM comments');
  console.log('Table comments deleted', res);
}
deleteCommentsTable();
