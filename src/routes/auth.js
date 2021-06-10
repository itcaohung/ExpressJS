const express = require('express');
const router = express.Router();
const validate = require('../validate/loginValidate');

const authController = require('../app/controllers/AuthController');

router.get('/login', authController.login);
router.get('/logout', authController.logout);
router.post('/login', validate.login, authController.postLogin);

module.exports = router;