module.exports.requireAuth = function (req, res, next) {
    const User = require('../app/models/User');

    if (!req.cookies.userId) {
        res.redirect('/auth/login');
        return;
    }

    User.findOne({ _id: req.cookies.userId })
        .then(user => {
            if (!user) {
                res.redirect('/auth/login');
                return;
            }
        })
        .catch(next);

    next();
};