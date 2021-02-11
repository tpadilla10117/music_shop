const { Client } = require('pg'); // imports the pg module

// supply the db name and location of the database
// For now this will get us access to the database

const client = new Client('postgres://localhost:5432/musicshop-dev');

module.exports = {
  client,
}