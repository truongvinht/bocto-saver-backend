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

// CREATE
router.post(LOCATIONS_BASE_URL,location.create);

// FIND
router.get(LOCATIONS_BASE_URL, location.findAll);

// DELETE
router.delete(LOCATIONS_BASE_URL + "/:id", location.delete);

module.exports = router;
