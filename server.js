//imports
require("dotenv").config();
const { response } = require("express");
const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;

//static middleware
app.use(express.static("./client/public"));
app.get("*", (request, response) => {
  response.sendFile(path.resolve("./client/src"));
});

//listen for port
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
