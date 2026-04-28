import mysql from 'mysql2/promise';

class Database {
  static pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '', 
    database: 'node2026b',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });

  static async query(sql, values = []) {
    const connection = await this.pool.getConnection();
    try {
      const [results] = await connection.execute(sql, values);
      return results;
    } finally {
      connection.release();
    }
  }
}

export default Database;
