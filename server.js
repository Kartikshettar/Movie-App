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
   
   const db = require("./app/models");
   db.mongoose
     .connect(db.url, {
       useNewUrlParser: true,
       useUnifiedTopology: true
     })
     .then(() => {
       console.log("Connected to the database!");
       
     })
     .catch(err => {
       console.log("Cannot connect to the database!", err);
       process.exit();
     });

     const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
    
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });


app.listen(9000);
