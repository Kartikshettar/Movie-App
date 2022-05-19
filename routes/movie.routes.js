// const express = require('express');
// const Movie = require('../models/movie.model');
// const router = new express.Router();

// // Create a movie
// router.post('/movie.model', async (req, res) => {
//   const movie = new Movie(req.body);
//   try {
//     await movie.save();
//     res.status(201).send(movie);
//   } catch (e) {
//     res.status(400).send(e);
//   }
// });

// module.exports = router;

const express = require('express');
const route = express.Router()

const Movies = require('../models/movie.model');


route.get('./movie.model', Movies.findAllMovies);
route.get('./movie.model/published', Movies.findPublishedMovie);
route.get('./movie.model/released', Movies.findReleasedMovie);
route.get('/movie.model/movieSchema/movieid' , Movies.findone);
route.get('./movie.model/movieSchema/shows' , Movies.findShow);

module.exports = route;