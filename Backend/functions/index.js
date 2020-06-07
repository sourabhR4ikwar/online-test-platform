const functions = require('firebase-functions');
const express = require('express');
const app = express();

// routes
const authRoutes = require('./routes/auth');

// middlewares

// setup routes
app.use('/auth', authRoutes);
app.get('/test', (req, res) => {
    res.status(200).json({
        message: "It Works."
    })
})


exports.api = functions.https.onRequest(app);