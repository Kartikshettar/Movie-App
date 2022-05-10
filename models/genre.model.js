const mongoose = require('mongoose');
var generateId = require('./plugins/generateId');
const genreSchema = newSchema([{
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
    genreSchema.plugin(generateId());
module.exports = mongoose.model('Genre', genreSchema);