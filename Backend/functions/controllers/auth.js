const firebase = require('firebase');

const { db } = require('../util/db');
const config = require('../config');

firebase.initializeApp(config);

exports.login = (req, res) => {
    const user = {
      email: "sourabh.raikwar@gmail.com",
      password: "test123",
    };
    let errors = {};

    // TODO Validation

    // FirebaseAuthentication
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(data => {
            return data.user.getIdToken();
        })
        .then(token => {
            return res.json({token});
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'Internal Server Error!',
                error: err
            })
        })
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

exports.fetchTests = (req, res) => {
    db.collection('tests').doc('8cnFIWTib2RHlt7LNMfD').get().then(docRef => {
        docRef.collection('sections').get().then(docs => {
            let docs = [];
            docs.map(doc => {
                docs.push(doc.data());
            });
        });
        res.json({
            message: docs
        });
    });
};