var express = require('express');
var app = express();
var bGround = require('fcc-express-bground');

bGround.log("Hello World");
console.log("Hello World");


app.use(express.static(__dirname + "/public/"));
app.use('/public', express.static(__dirname + "/public"));


app.get("/", function(req, res){
  res.sendFile(__dirname + '/views/index.html');
});




































 module.exports = app;
