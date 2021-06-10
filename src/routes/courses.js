const express = require('express');
const router = express.Router();
const validate = require('../validate/courseValidate');

const courseController = require('../app/controllers/CourseController');

router.post('/store', validate.store, courseController.store);
router.get('/create', courseController.create);
router.get('/:id/edit', courseController.edit);
router.put('/:id', courseController.update);
router.delete('/:id', courseController.delete);
router.get('/:slug', courseController.show);

module.exports = router;