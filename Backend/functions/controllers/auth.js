const firebase = require('firebase');

const { db } = require('../util/db');
const config = require('../config');

firebase.initializeApp(config);

exports.login = (req, res) => {
    
};

exports.signup = (req, res) => {
    const newUser = {
        email: 'sourabh.raikwar@gmail.com',
        password: 'test123',
    }
    firebase.auth()
        .createUserWithEmailAndPassword(newUser.email, newUser.password)
        .then(data => {
            return res.status(201).json({
                user: data.user.uid
            })
        })
        .catch(err => {
            const error = {
                message: 'Internal Server Error',
                error : err,
            }
            res.status(500).json(error);
        })
};