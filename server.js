// var express = require('express');
// var app = express();

// app.get('/movies', function(req, res) {
//     res.send("All Movies Data in JSON format from Mongo DB");
//   });

// app.get('/genres', function(req, res) {
//     res.send("All Genres Data in JSON format from Mongo DB");
//    });
// // define the about route
// app.get('/artists', function(req, res) {
//     res.send("All Artists Data in JSON format from Mongo DB");
//    }); 



const express = require('express');
const app = express();
var cors = require('cors');



const options = {
  origin: 'http://localhost:3000/api',
  }
  app.use(cors(options))


 app.get("/", cors(options), function (req, res) {
  res.json({ message: "Welcome to Upgrad Movie booking application development." });
})


app.listen(3000);