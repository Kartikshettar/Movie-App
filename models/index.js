// var express = require('Express');
// var app = express();
// var server = require('../server');
// const connectDB = require('../config/db.config');

// connectDB();
// const db = {};
// db.url = connectDB.url;
//  mongoose = db.mongoose;
// db.artist = require('../models/artist.model')(mongoose);
// db.genre= require("../models/genre.model")(mongoose);
// db.movie= require("../models/movie.model")(mongoose);


// app.use('/server',server);
// app.listen(9000);




module.exports = {
    'Artist' :require('./artist.model'),
    'Genre' : require('./genre.model'),
    'Movie' : require('./movie.model')
};