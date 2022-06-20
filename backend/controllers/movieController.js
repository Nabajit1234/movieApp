// Controller functions for movie routes

const mongoose = require('mongoose');
const Movie2 = require('../models/movie2');
const Rating = require('../models/ratingModel');

// Gets a list of movies
const getMovies = async (req, res) => {
    try {
        const movies = await Movie2.find({});
        // res.send(movies[0]);
        
        // for (const key in movies) {
        //     const element = movies[key];
        //     console.log(element)
        // }
        res.render('movies.ejs', {movies : movies});
    } catch (error) {
        console.log(error);
    }
};

// Gets detail about a movie
const getMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const movie = await Movie2.findOne({_id: id})
        res.render('movieDetail', {movie});

    } catch (error) {
        console.log(error);
    }
};

// Lets a user rate a movie and updates the movie rating
const rateMovie = async (req, res) => {
    const movieId = req.params.id
    const userId = req.user._id;
    const rating = req.body.rating;


    try {
        let rate = new Rating({
            userId,
            movieId,
            rating
        })

        await rate.save()

        let movie = await Movie2.findById(movieId);

        let updatedMovie = await Movie2.findOneAndUpdate({_id: movieId}, {$set:{
            vote_count: movie.vote_count + 1,
            vote_average: parseFloat(((movie.vote_average * movie.vote_count) + parseInt(rating))/ (movie.vote_count + 1)).toFixed(1)
        }},{new : true})
        res.render("movieDetail", {movie : updatedMovie} )
    } catch (error) {
        console.log(error)
    }
}

module.exports = { getMovies, getMovie, rateMovie };