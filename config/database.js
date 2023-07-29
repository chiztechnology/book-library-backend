const { createPool } = require('mysql');

const pool = createPool({
  port: process.env.DB_PORT,
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  connectionLimit: 10
});

module.exports = pool;