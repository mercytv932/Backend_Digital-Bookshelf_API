const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db/connection.js");

const app = express();
dotenv.config();
connectDB();
