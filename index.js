const express = require("express");
const bodyParser = require("body-parser");
const tutorialRoutes = require("./api/routes/tutorials");
const usersRoutes = require("./api/routes/users");

const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", false);

const app = express();
var cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

mongoose
  .connect(process.env.MONGO_CONNECTION, { useNewUrlParser: true })
  .then(console.log("connected"))
  .catch((err) => {
    console.log("Connection error");
    console.log(err);
  });

app.use(tutorialRoutes);
app.use(usersRoutes);

app.listen(3000);
