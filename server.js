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
const cookieSession = require("cookie-session");
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);



const options = {
  origin: 'http://localhost:8085/api',
  }
  app.use(cors(options))
  app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "bezkoder-session",
    secret: "COOKIE_SECRET", // should use as secret environment variable
    httpOnly: true,
    sameSite: 'strict'
  })
);


 app.get("/", cors(options), function (req, res) {
  res.json({ message: "Welcome to Upgrad Movie booking application development." });
})
app.get('/artist', require('./routes/artist.routes'))
app.get('/genre', require('./routes/genre.routes'))
app.get('/movie', require('./routes/movie.routes'))

app.listen(8085);