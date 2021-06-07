const Course = require('../models/Course');

class SiteController {

    // [GET] /
    index(req, res, next) {

        // Use callbacks
        // Course.find({}, function(error, courses, next) {
        //     if(!error) {
        //         res.json(courses);
        //     } else {
        //         next(error);
        //     }
        // });
        
        // Use promises
        Course.find({})
            .then(courses => {
                courses = courses.map(course => course.toObject());
                res.render('home', { courses });
            })
            .catch(next);
    }

}

module.exports = new SiteController;