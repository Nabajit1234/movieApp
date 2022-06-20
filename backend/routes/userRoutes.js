// User routes
const { Router } = require('express');
const { getUsers, getUser, createUser, loginUser } = require('../controllers/userController');

const router = Router();

// Gets all users
router.get('/', getUsers);

// Gets the register page
router.get('/register', (req, res) => {
    res.render('register.ejs');
})

// Gets the login page
router.get('/login', (req, res) => {
    res.render('login.ejs')
})

// Gets a specific user
router.get('/:id', getUser);

// Creates a user
router.post('/register', createUser);

// Post route to login a user
router.post('/login', loginUser);

module.exports = router;