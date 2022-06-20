// Defining the Movie schema
const mongoose = require('mongoose');

const  Schema  = mongoose.Schema;

const movieModel = new Schema(  {
    "adult": Boolean,
    "backdrop_path": String,
    "belongs_to_collection": Object,
    "budget": Number,
    "genres": Array,
    "homepage": String,
    "id": Number,
    "imdb_id": String,
    "original_language": String,
    "original_title": String,
    "overview": String,
    "popularity": Number,
    "poster_path": String,
    "production_companies": Array,
    "production_countries": Array,
    "release_date": String,
    "revenue": Number,
    "runtime": Number,
    "spoken_languages": Array,
    "status": String,
    "tagline": String,
    "title": String,
    "video": Boolean,
    "vote_average": Number,
    "vote_count": Number
  });

const Movie2 = mongoose.model('Movie2', movieModel);

module.exports = Movie2;