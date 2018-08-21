const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const router = require("./router");
const app = express();

// App Setup
app.use(morgan("combined")); //login framework
app.use(bodyParser.json({ type: "*/*" }));
router(app);
//Server Setup

const port = process.env.PORT || 5000;
const server = http.createServer(app);
server.listen(port);

console.log("Server is listenning on: ", port);
