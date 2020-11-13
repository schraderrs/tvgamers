let mysql = require('mysql');

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "tindervoorgamers",
    database: 'thealmightydatabase'
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });