// Movie Routes
const { Router } = require('express');
const { getMovies, getMovie, rateMovie } = require('../controllers/movieController');
const verifyUser = require('../middlewares/auth');

const router = Router();

// route to get list of all movies
router.get('/', verifyUser, getMovies);

//route to get a movie
router.get('/:id', verifyUser, getMovie);

// post route to rate a movie
router.post('/:id', verifyUser, rateMovie);

module.exports = router;




