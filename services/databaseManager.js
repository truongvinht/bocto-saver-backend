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
        this.connect(undefined);
    }
    connect(database) {
        let dbUrl = undefined;
        if (database == undefined || database == null) {
            dbUrl = db.url;
        } else {
            dbUrl = db.url + '/' + database;
        }
        db.mongoose.connect(dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => {
            logger.info(`Connected to the database! ${dbUrl}`);
        })
        .catch(err => {
            logger.error("Cannot connect to the database!", err);
            process.exit();
        });

    }

    disconnect() {
        logger.info(`Disconnect database!`);
        db.mongoose.disconnect();
    }

    url() {
        return CONFIG.dbConnection;
    }
};

module.exports = DatabaseManager;
