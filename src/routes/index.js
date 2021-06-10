const coursesRouter = require('./courses');
const meRouter = require('./me');
const siteRouter = require('./site');
const authRouter = require('./auth');

const authMiddleware = require('../middleware/authMiddleware');

function route(app) {

    app.use('/auth', authRouter);
    app.use('/courses', authMiddleware.requireAuth, coursesRouter);
    app.use('/me', authMiddleware.requireAuth,meRouter);
    app.get('/', siteRouter);
}

module.exports = route;