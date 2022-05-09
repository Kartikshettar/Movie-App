var express = require('express');
var app = express();

app.get('/movies', function(req, res) {
    res.send("All Movies Data in JSON format from Mongo DB");
  });

app.get('/genres', function(req, res) {
    res.send("All Genres Data in JSON format from Mongo DB");
   });
// define the about route
app.get('/artists', function(req, res) {
    res.send("All Artists Data in JSON format from Mongo DB");
   });

app.listen(9000);
