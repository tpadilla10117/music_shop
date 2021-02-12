// grab our client with destructuring from the export in index.js
// we also call the utility/helper functions from our db/index.js file
const { client, getAllUsers, createUser } = require('./index');

/* async function testDB() {
    try {
      // connect the client to the database, finally
      client.connect();
  
      // queries are promises, so we can await them
      const result = await client.query(`SELECT * FROM users;`);
  
      // for now, logging is a fine way to see what's up
      console.log(result);
    } catch (error) {
      console.error(error);
    } finally {
      // it's important to close out the client connection
      client.end();
    }
  } */

// this function should call a query which drops all tables from the database
async function dropTables() {
  try {
    console.log("Starting to drop tables...");

    //we have to make sure that we drop tables in a logical order
    await client.query(`
      DROP TABLE IF EXISTS users;
    `);

    console.log("Finished dropping tables!")
  } catch (error) {
    console.log("Error dropping tables!")
    throw error; // we pass the error up to the function that calls dropTables
  }
}

//this function should call a query which creates all tables for our database
async function createTables() {
  try {

    console.log("Starting to build tables...");
    await client.query(`
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username varchar(255) UNIQUE NOT NULL,
        password carchar(255) NOT NULL,
        name varchar(255) NOT NULL,
        location varchar(255) NOT NULL,
        active boolean DEFULT true
      );
    `)
    console.log("Finished building tables!");
  } catch (error) {
    throw error; // we pass an error up to the function that calls createTables
  }
}


//Now we seed the database with initial users:

async function createInitialUsers() {
  try {
    console.log("Starting to create users...");

    //here we use the helper function, createUser, to seed some user data (albert)
    await createUser({
      username: 'albert',
      password: 'bertie99',
      name: 'Al Bert',
      location: 'Sidney, Australia'
    });

  } catch (error) {
    console.error("Error creating Users!");
    throw error;
  }

}

async function rebuildDB() {
  try {
    //connect the client to the database
    client.connect();
    await dropTables();
    await createTables();
    await createInitialUsers()

  } catch (error) {
    console.log("Error during rebuildDB");
    throw error;

  } finally {
    client.end();
  }
}

rebuildDB();
  
/* testDB(); */