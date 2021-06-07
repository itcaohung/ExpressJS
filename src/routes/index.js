const newRouter = require('./news');
const siteRouter = require('./site');

function route(app) {

    app.get('/news', newRouter);

    app.get('/', siteRouter);
}

module.exports = route;