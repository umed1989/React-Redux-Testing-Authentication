const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const router = require("./router");
const app = express();
const mongoose = require("mongoose");
const keys = require("./config/keys");

//DB Setup

mongoose.connect(
  keys.mongodb.dbURI,
  { useNewUrlParser: true },
  () => console.log("connected to Mongo DB")
);
// App Setup
app.use(morgan("combined")); //login framework
app.use(bodyParser.json({ type: "*/*" }));
router(app);

const port = process.env.PORT || 8000;
const server = http.createServer(app);
server.listen(port);

console.log("Server is listenning on: ", port);
