// Object for all our SQL statement functions.

// Import MySQL connection.
var connection = require("../config/connection.js");


// Helper function to convert object key/value pairs to SQL syntax

// Select and individual burger.
async function selectAll() {
  const query = `SELECT * FROM burgers`;
  const result = await connection.query(query);

  return result;
}

// Insert and individual burger. 
async function insertBurger(burgerName) {
  const query = `INSERT INTO burgers (burger_name) VALUES ("${burgerName}");`;
  const result = await connection.query(query);

  return result;
}

// Update and individual burger.
async function updateBurger(id) {
  const query = `
      UPDATE burgers
      SET devoured = true
      WHERE id = ${id}
  `;
  const result = await connection.query(query);

  return result;
}
//place the functions inside of an object
const orm = {
  updateBurger: updateBurger,
  selectAll: selectAll,
  insertBurger: insertBurger,
}

module.exports = orm;