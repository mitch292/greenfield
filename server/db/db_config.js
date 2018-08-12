const mysql = require('mysql')

const config = {
  host: process.env.dbHost,
  user: process.env.dbUser,
  password: process.env.dbPassword,
  database: process.env.database,
  port: '3306'
}

const db = mysql.createPool(config);
module.exports = db;