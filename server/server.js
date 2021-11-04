const express = require("express");

//! Import datbase to establish the connection with the cloud
const database_conn = require("./config/database");

//! Use bodyparser as a middleware
const bodyParser = require("body-parser");

//! any file uses environment variables must be imported after dotenv configuration
const dotenv = require("dotenv").config();

//! For development purpose
const colors = require("colors");

//! Define the app and fire it
const app = express();

//! Use built-in middleware
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json());

//! Get the port from environment variables
const PORT = process.env.PORT || 5000;

//! Listen to development/production PORT
app.listen(PORT, () => {
	console.log(`server is running up on port ${PORT}`.magenta.inverse);
});
