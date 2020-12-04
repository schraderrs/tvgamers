const mysql = require("mysql");
const dbConfig = require("./db.config.ts");

// Create a connection to the database
const pool = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

if(pool.getConnection) {
  console.log('Successfully connected to the database.')
}


module.exports = pool;



