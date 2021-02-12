const { Client } = require('pg'); // imports the pg module

// supply the db name and location of the database
// For now this will get us access to the database

const client = new Client('postgres://localhost:5432/musicshop-dev');

// These are helper functions to use throughout the application:
  //USER Methods:

async function createUser({ username, password, name, location }) {
  try {
    const { rows: [ user ] } = await client.query(`
      INSERT INTO users(username, password, name, location) 
      VALUES($1, $2, $3, $4) 
      ON CONFLICT (username) DO NOTHING 
      RETURNING *;
    `, [username, password, name, location]);

    return rows;
  } catch (error) {
    throw error;
  }
}

async function getAllUsers() {
  try {
    const { rows } = await client.query(`SELECT id, username, name, location, active FROM users;`);

  return rows;

  } catch(error) {
    throw error;
  }
  
}

// we export the helper functions:
module.exports = {
  client,
  createUser,
  getAllUsers,
}