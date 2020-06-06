const express = require('express');
const router = express.Router();

// controllers
const authController = require('../controllers/auth');

router.get('/login', authController.login);
router.get('/signup', authController.signup);


module.exports = router;