
//Starting a node package (project) with npm init -y

    npm init -y


// Need to install express
npm install express

//Setup your database (postgres)

    createdb musicshop-dev

// Allows us to access psql commands

    psql musicshop-dev

// Allows us to see table

    musicshop-dev=# \dt

// # node's postgresql adapter

    npm install pg

// # live reload; we install nodemon - allows us to update application
    
    npm install nodemon --save-dev 

// Install morgan as a dependency:

npm install morgan --save