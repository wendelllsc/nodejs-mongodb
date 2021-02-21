require("dotenv").config();

const express = require("express");
const cors = require("cors");
const startDatabase = require("./src/Database/database");
const bodyParser = require("body-parser");
const router = require("./src/Routes/Router");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(router);

startDatabase();

app.listen(process.env.PORT, () => {
  const db = mongoose.connection;
  db.once("open", function () {
    console.log("Database running!");
  });
  console.log("Server running!");
});
