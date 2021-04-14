var express = require('express');
var app = express();
var bGround = require('fcc-express-bground');
require('dotenv').config();


bGround.log("Hello World");
console.log("Hello World");

//Serve an HTML file
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

//Serve static assets
app.use(express.static(__dirname + "/public/"));
app.use('/public', express.static(__dirname + "/public"));

//Serve json with a specific route
// app.get("/json", (req, res) => {
//   res.json(
//     { "message": "Hello json" }
//   );
// });

//Use the .env File to configure the app
app.get("/json", function(req, res) {
  var jsonResponse = { "message": "Hello json" };

  if (process.env.MESSAGE_STYLE === "uppercase") {
    jsonResponse.message = jsonResponse.message.toUpperCase()
  }

  res.json(jsonResponse);
});


































 module.exports = app;
