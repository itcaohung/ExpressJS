const User = require('../models/User');

class AuthController {

    login(req, res, next) {
        res.render('auth/login');
    }

    postLogin(req, res, next) {
        var email = req.body.email;
        var password = req.body.password;

        User.findOne({ email: email })
        .then(user => {
            if (!user) {
                res.render('auth/login', {
                    errors: ['Người dùng không tồn tại.'],
                    values: req.body
                });
                return;
            }

            user = user.toObject();
            if (user.password != password) {
                res.render('auth/login', {
                    errors: ['Mật khẩu bạn nhập không đúng.'],
                    values: req.body
                });
                return;
            }

            res.cookie('userId', user._id);
            res.redirect('/');
        })
        .catch(next);
    }

    logout(req, res, next) {
        res.clearCookie('userId', {path:'/'});
        res.redirect('/');
        res.send('dd');
    }
}

module.exports = new AuthController;