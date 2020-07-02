//This file will connect to the database.
// Set up MySQL connection.
var mysql = require("mysql");
var util = require('util');
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "burger_db"
});

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
//bind method creates a new function that, when called has it's 'this' keyword set to the provided value. 
const query = util.promisify(connection.query).bind(connection);

module.exports = {
  query: query,
  connection: connection,
}