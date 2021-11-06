
// index.js
// API interface for external access
// ==================

/**
 * @apiDefine BadRequest
 * @apiError BadDatabaseRequest Request could not be executed on database,
 */

// call the packages we need
const express = require('express'); // call express
const app = express(); // define our app using express

const config = require('../config/configuration');
const LogHelper = require('../loaders/loghelper');
const logger = LogHelper.getInstance();

const ApiResponse = require('./apiResponse');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api

app.use(function (req, res, next) {
    // prevent missing credentials
    if (!req.headers.authorization) {
        // 403
        const response = new ApiResponse(403);
        logger.error(`Request: ${response.getMessage()}`);
        return res.status(response.getHttpCode()).json({ error: response.getLongMessage() });
    }
    // check for valid credentials
    if (req.headers.authorization !== config.appToken) {
        // 401
        const response = new ApiResponse(401);
        logger.error(`Request: ${response.getMessage()}`);
        return res.status(response.getHttpCode()).json({ error: response.getLongMessage() });
    }

    // enable access
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Currently only allow read access, 'GET, POST, OPTIONS, PUT, PATCH, DELETE'
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// LOCATION
app.use('/api', require('./location.routes'));

// export API
module.exports = app;
