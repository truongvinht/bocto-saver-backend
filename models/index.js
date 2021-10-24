

// connection configuration
const CONFIG = require('../config/configuration');

const DB_CONNECTION = `mongodb+srv://${CONFIG.dbUser}:${CONFIG.dbPwd}@${CONFIG.dbUrl}`;

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = DB_CONNECTION;
db.locations = require("./location.model.js")(mongoose);

module.exports = db;
