// databaseManager.js
// Handle database connection
// ==================

// connection configuration
const CONFIG = require('../config/configuration');

// logging
const LogHelper = require('../loaders/loghelper');
const logger = LogHelper.getInstance();

class DatabaseManager {
    // init database manager
    constructor () {
        DatabaseManager.instance = this;

        const mongoose = require("mongoose");
        mongoose.Promise = global.Promise;
        this.db = {};
        this.db.mongoose = mongoose;
        this.db.url = CONFIG.dbConnection;

        const dbEnv = mongoose.connection.useDb(CONFIG.dbName);

        // load model structure
        this.db.locations = require("../models/location.model.js")(mongoose,dbEnv);
    }

    // access location table
    locations() {
        return this.db.locations;
    }

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
            dbUrl = this.db.url;
        } else {
            dbUrl = this.db.url + '/' + database;
        }
        this.db.mongoose.connect(dbUrl, {
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
        this.db.mongoose.disconnect();
    }

    url() {
        return CONFIG.dbConnection;
    }
};

module.exports = DatabaseManager;
