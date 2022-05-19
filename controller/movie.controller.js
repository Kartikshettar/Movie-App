const Movie = require('../models/movie.model');

exports.findAllMovies = (res,req)=>{
  Movie.find({ })
  .then(data =>{
      if(!data){
          res.status(404).send({ message : "Movie not found "})
      }else{
          res.send(data)
      }
  })
  .catch(err =>{
      res.status(500).send({ message: "Erro retrieving  " })
  })

};

exports.findPublishedMovie = (res,req)=>{
var Published = req.query.published;
    Movie.find({ Published })
    .then(data =>{
        if(data === false){
            res.status(404).send({ message : "Not Published "})
        }else{
            res.send(data)
        }
    })
    .catch(err =>{
        res.status(500).send({ message: "Erro retrieving  " })
    })
  
  };

  exports.findReleasedMovie = (res,req)=>{
    var Release = req.query.released;
        Movie.find({ Release })
        .then(data =>{
            if(data === false){
                res.status(404).send({ message : "Not Released "})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message: "Erro retrieving  " })
        })
      
      };

exports.findone = (res,req)=>{
  const id = req.query.movieid;
  Movie.findById({id})
  .then(data =>{
      if(!data){
          res.status(404).send({ message : "Movie not found "+id})
      }else{
          res.send(data)
      }
  })
  .catch(err =>{
      res.status(500).send({ message: "Erro retrieving user with id " + id})
  })

};

exports.findShow = (res,req)=>{
  const Show = req.query.shows;
  Movie.find({Show})
  .then(data =>{
      if(!data){
          res.status(404).send({ message : "Show not found "+Show})
      }else{
          res.send(data)
      }
  })
  .catch(err =>{
      res.status(500).send({ message: "Erro retrieving  " })
  })

};