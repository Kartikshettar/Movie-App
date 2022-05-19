const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const genreSchema = new Schema([{
    genreid: {
        type: Number, 
        required: true, 
        index: {
          unique: true
        }
      }, 
      genre: {
        Name: String
      },
    }]);

    const Genre = mongoose.model('Genre',  genreSchema);
    module.exports = Genre;
