var express = require('Express');
var app = express();
const dbconfig = require('../config/db.config');
var server = require('..server/');
const { default: mongoose } = require('mongoose');

const db = {};
db.mongoose = mongoose;
db.url = dbconfig.url;
db.artist = require('../models/artist.model')(mongoose);
db.genre= require("../models/genre.model")(mongoose);
db.movie= require("../models/movie.model")(mongoose);
module.export = db;

app.use('/server',server);
app.listen(9000);