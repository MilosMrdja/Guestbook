import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config(); // loading env vars

// connection with db
const pool = mysql
  .createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  })
  .promise();

export default pool;
