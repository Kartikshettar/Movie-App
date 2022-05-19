// const express = require('express');
// const Genre = require('../models/genre.model');
// const router = new express.Router();

// // Create a movie
// router.post('/genre.model', async (req, res) => {
//   const genre = new Genre(req.body);
//   try {
//     await genre.save();
//     res.status(201).send(genre);
//   } catch (e) {
//     res.status(400).send(e);
//   }
// });

// module.exports = router;


var express = require('express');
const Genre = require('../models/genre.model');;

var router = express.Router();

router.get('/genre.model',Genre.findAllGenres);


module.exports = router;