const Course = require('../models/Course');

class MeController {

    // [GET] /
    storedCourses(req, res, next) {

        // Use promises
        Course.find({})
            .then(courses => {
                courses = courses.map(course => course.toObject());
                res.render('me/stored-courses', { courses });
            })
            .catch(next);
    }

}

module.exports = new MeController;