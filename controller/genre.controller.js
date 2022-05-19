const Genre = require('../models/genre.model');
exports.findAllGenres() = (res,req)=>{
  Genre.find({ })
  .then(data =>{
      if(!data){
          res.status(404).send({ message : "Genre not found "})
      }else{
          res.send(data)
      }
  })
  .catch(err =>{
      res.status(500).send({ message: "Erro retrieving  "})
      console.log(err);
  })

};