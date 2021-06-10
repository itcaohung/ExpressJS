const Course = require('../models/Course');

class CourseController {

    // [GET] /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                course = course.toObject();
                res.render('courses/show', { course });
            })
            .catch(next);
    }

    // [GET] /courses/create
    create(req, res, next) {
        res.render('courses/create');
    }

    // [POST] /courses/store
    store(req, res, next) {

        var errors = [];
        if (!req.body.name) {
            errors.push('Bạn chưa nhập tên khoá học.');
        }

        if (!req.body.description) {
            errors.push('Bạn chưa nhập mô tả khoá học.');
        }

        if (!req.body.videoId) {
            errors.push('Bạn chưa nhập video id.');
        }

        if (!req.body.level) {
            errors.push('Bạn chưa nhập trình độ.');
        }

        if (errors.length) {
            res.render('courses/create', { 
                errors: errors,
                values: req.body
            });
            return;
        }

        const formData = req.body;
        formData.image = 'https://img.youtube.com/vi/' + req.body.videoId + '/sddefault.jpg';
        const course = new Course(formData);
        course.save()
            .then(() => res.redirect('/'))
            .catch();
    }

    // [GET] /courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(course => {
                course = course.toObject();
                res.render('courses/edit', { course })
            })
            .catch(next);
    }

    // [PUT] /courses/:id
    update(req, res, next) {
        // res.json(req.body);
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }

    // [DELETE] /courses/:id
    delete(req, res, next) {
        // res.json(req.body);
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new CourseController;