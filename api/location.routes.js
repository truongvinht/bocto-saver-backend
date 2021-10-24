// location.routes.js
// API for accessing location data
// ==================

// import
const express = require('express'); // call express

const LogHelper = require('./../loaders/loghelper');
const logger = LogHelper.getInstance();
const location = require('./../controllers/location.controller')

// ROUTES FOR OUR API
// =============================================================================
const router = express.Router(); // get an instance of the express Router

// base url
const LOCATIONS_BASE_URL = '/locations';

router.post(LOCATIONS_BASE_URL,location.create);

router.get(LOCATIONS_BASE_URL, location.findAll);

module.exports = router;
