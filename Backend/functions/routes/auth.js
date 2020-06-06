const express = require('express');
const router = express.Router();

// controllers
const authController = require('../controllers/auth');

router.post('/login', authController.login);
router.post('/signup', authController.signup);


module.exports = router;