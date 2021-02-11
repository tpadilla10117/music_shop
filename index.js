require("dotenv").config();

//This is the Web Server (express)
const express = require('express');
const server = express();

//create the express server here
require('dotenv').config();

//create logs for everthing with morgan
//morgan is a Node. js and Express middleware to log HTTP requests and errors, and simplifies the process.

const morgan = requre('morgan');
server.use(morgan('dev'));