// Schema for 'Rating' collection
const mongoose = require('mongoose');

const  Schema  = mongoose.Schema;

const rating = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    movieId: {
        type: Schema.Types.ObjectId,
        ref: 'Movie2'
    },
    rating: {
        type: Number
    }
})

const Rating = mongoose.model('Rating', rating);
module.exports = Rating;