const proponentsRuter = require('./proponentsRouter');
const projectsRouter = require('./projectsRouter');
const express = require('express')
//const analystsRuter = require('./analystsRuter');
function routerApi(app){
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/proponents',proponentsRuter);
    router.use('/projects',projectsRouter);
}

module.exports = routerApi;