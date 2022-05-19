// const express = require('express');
// const Artist = require('../models/artist.model');
// const router = new express.Router();

// // Create a movie
// router.post('/artist.model', async (req, res) => {
//   const artist = new Artist(req.body);
//   try {
//     await artist.save();
//     res.status(201).send(artist);
//   } catch (e) {
//     res.status(400).send(e);
//   }
// });

// module.exports = router;


var express = require('express');
const Artist = require('../models/artist.model');
var router = express.Router();

router.get('/genre.model' , Artist.findAllArtist);


module.exports = router;