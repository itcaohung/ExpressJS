module.exports.login = function (req, res, next) {
    var errors = [];

    if (!req.body.email) {
        errors.push("Vui lòng nhập email.");
    }

    if (!req.body.password) {
        errors.push("Vui lòng nhập password.");
    }

    if (errors.length) {
        res.render('auth/login', {
            errors: errors,
            values: req.body
        });
        return;
    }
    next();
};