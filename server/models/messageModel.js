import pool from "../database.js";

export async function getMessages(limit, offset) {
  const [rows] = await pool.query(
    "SELECT * FROM messages ORDER BY id DESC LIMIT ? OFFSET ?",
    [limit, offset]
  );
  return rows;
}
export async function getMessagesCount() {
  const [rows] = await pool.query("SELECT COUNT(*) as count FROM messages");
  return rows[0].count;
}

export async function getMessage(id) {
  const [rows] = await pool.query(`SELECT * FROM messages m WHERE m.id = ?`, [
    id,
  ]);
  return rows[0];
}

export async function createMessage(userName, content) {
  const [res] = await pool.query(
    `
    INSERT INTO messages (userName, content)
    VALUES (?, ?)`,
    [userName, content]
  );
  return getMessage(res.insertId);
}
