import { createPool } from "mysql2/promise";

export const pool = createPool({
  host:"trabajadores-db.mysql.database.azure.com",
  user:"db_host1",
  database:"trabajadores",
  password:"admin_db123",
  port:3306,
});

(async () => {
  try {
    const connection = await pool.getConnection();
    console.log("Connected to the database successfully!");
    connection.release();
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
  }
})();

