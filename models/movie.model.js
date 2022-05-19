const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var movieSchema = new Schema([{ 
    movieid: {
      type: Number, 
      required: true, 
      index: {
        unique: true
      }
    }, 
    title: {
      type: String, 
      required: true
     }, 
     published: {
         type:Boolean,
         required: true
     },
     released: {
        type:Boolean,
        required: true
    },
    poster_url: {
        type : String,
        required: true
    },

    release_date: {
          type: Date,
        required: true 
     }, 
     publish_date :{
        type: Date,
        required: true 
     },
     artists: [{
       type : Schema.ObjectId, 
       ref : 'Actor'
     }],
     genre :[{
        type : Schema.ObjectId, 
        ref : 'Genre'

     }],
     duration: { type: [String], required: true },
     critic_rating: { type: Number, required: true },
     trailer_url: {type : String ,required: true},
     wiki_url: { type: String , required: true},
      story_line: {type: String , required: true},

      shows: [{
           id: { type: Number, required: true },
           theatre:{name: {type: String}, city:{String}},
           language:{type: String},
           show_timing:  {
            type: Date,
          required: true 
       }, 
           available_seats: {
            type: Number,
          required: true 
       }, 
           unit_price: {type:Number , required:true}
    }],
  }]);
  const Movie = mongoose.model('Movie', movieSchema);
  module.exports = Movie;