const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const artistSchema = new Schema([{
    id: {
        type: Number, 
        required: true, 
        index: {
          unique: true
        }
      }, 
  first_name: {
    type: String,
    required: [true, 'Artist must have a First name']
  },
  last_name: {
    type: String,
    required: [true, 'Artist must have a Last name']
  },
  wiki_url: {
    type: String
  },
  profile_url: {
    type: String,
  },
  movies: [{
    type :Schema.ObjectId,
    ref : 'Movie'
  }]
}]);


const Artist = mongoose.model('Artist', artistSchema);
module.exports = Artist;