// databaseManager.js
// Handle database connection
// ==================

const db = require("../models");

// connection configuration
const CONFIG = require('../config/configuration');

// logging
const LogHelper = require('../loaders/loghelper');
const logger = LogHelper.getInstance();

class DatabaseManager {

    // access singleton instance
    static getInstance() {
        if (!DatabaseManager.instance) {
            DatabaseManager.instance = new DatabaseManager();
        }
        return DatabaseManager.instance;
    }

    connect() {
        db.mongoose.connect(db.url, {
                useNewUrlParser: true,
                useUnifiedTopology: true
        })
        .then(() => {
            console.log("Connected to the database!");
        })
        .catch(err => {
            console.log("Cannot connect to the database!", err);
            process.exit();
        });
    }
    disconnect() {

    }

    url() {
        return CONFIG.dbConnection;
    }
};

module.exports = DatabaseManager;
