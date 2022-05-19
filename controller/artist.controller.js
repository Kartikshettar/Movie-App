const Artist = require('../models/artist.model');
exports.findAllArtist() = (res,req)=>{
  Artist.find({ })
  .then(data =>{
      if(!data){
          res.status(404).send({ message : "Artist not found "})
      }else{
          res.send(data)
      }
  })
  .catch(err =>{
      res.status(500).send({ message: "Erro retrieving  "})
      console.log(err);
  })

};
