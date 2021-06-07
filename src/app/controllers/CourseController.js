const Course = require('../models/Course');

class CourseController {

    // [GET] /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug})
         .then(courses => {
            res.render('courses/show');
         })
         .catch(next);
    }

}

module.exports = new CourseController;