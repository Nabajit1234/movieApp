const mongoose = require('mongoose');
const User = require('../models/userModels');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Gets all the users
const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        console.log(error);
    }
};

// Gets a specific user
const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findOne({_id: id})
        res.json(user);

    } catch (error) {
        console.log(error);
    }
};

// Lets us create a user
const createUser = async (req, res) => {
    console.log(req.body);
    const emailExist = await User.findOne({email: req.body.email});
    const usernameExist = await User.findOne({username: req.body.username});
    if(emailExist) return res.status(400).send('Email already exists!');
    if(usernameExist) return res.status(400).send('Username already exists!');

    try {
        const { fName, lName, username, email, password } = req.body
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await new User({
            fName,
            lName,
            username,
            email,
            password: hashedPassword
        });

        user.save();
        res.redirect('/users/login');
    } catch (error) {
        console.log(error)
    }
}

// Checks for validation and if found, sends token in cookies
const loginUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({username: username});
        if(!user) return res.send('Email or Password is invalid!')
        if (user) {
            const validPass = await bcrypt.compare(password, user.password);
            if(!validPass) return res.send('Invalid Password!');
            console.log(user._id);
            const token  = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET, {expiresIn: '1H'});
            // console.log(req.headers)
            // req.headers['auth-token'] = token;
            res.cookie('auth-token', token);
            res.redirect('/movies');

        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = { getUsers, getUser, createUser, loginUser };