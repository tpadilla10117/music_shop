const { Client } = require('pg'); // imports the pg module

// supply the db name and location of the database
// For now this will get us access to the database

const client = new Client('postgres://localhost:5432/musicshop-dev');

// These are helper functions to use throughout the application:

async function createUser({ username, password }) {
  try {
    const { rows } = await client.query(`
      INSERT INTO users(username, password) 
      VALUES($1, $2) 
      ON CONFLICT (username) DO NOTHING 
      RETURNING *;
    `, [username, password]);

    return rows;
  } catch (error) {
    throw error;
  }
}

async function getAllUsers() {
  const { rows } = await client.query(`SELECT id, username FROM users;`);

  return rows;
}

// we export the helper functions:
module.exports = {
  client,
  createUser,
  getAllUsers,
}