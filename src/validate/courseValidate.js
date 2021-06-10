module.exports.store = function (req, res, next) {

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

    next();
};