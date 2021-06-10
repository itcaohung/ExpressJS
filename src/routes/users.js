const express = require('express');
const router = express.Router();

const userController = require('../app/controllers/UserController');

router.get('/stored/courses', meController.storedCourses);

module.exports = router;