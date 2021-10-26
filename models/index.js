

// connection configuration
const CONFIG = require('../config/configuration');

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = CONFIG.dbConnection;
db.locations = require("./location.model.js")(mongoose);

module.exports = db;
