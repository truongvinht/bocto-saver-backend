// configure.js
// handle application variables
// ==================

// Get port from environment and store in Express.
const appPort = process.env.PORT || '3000';

// Token for API access
const appToken = process.env.TOKEN || 'sample';

// environment variable
const appEnv = process.env.NODE_ENV || 'local';

// configuration for local testing
let localSettings = {};

try {
    localSettings = require('../.config.json');
} catch (e) {
    if (e.code !== 'MODULE_NOT_FOUND') {
        throw e;
    }
    console.log('.config.json not found. Using default configuration...');
}

// Database CLUSTER
let dbCluster = '';
if(Object.prototype.hasOwnProperty.call(localSettings, 'dbCluster')) {
    dbCluster = localSettings.dbCluster;
} else {
    dbCluster = process.env.DBCLUSTER;
}

// Database URL
let dbUrl = '';
if(Object.prototype.hasOwnProperty.call(localSettings, 'dbUrl')) {
    dbUrl = localSettings.dbUrl;
} else {
    dbUrl = process.env.DBURL;
}

// Database User
let dbUser = '';
if(Object.prototype.hasOwnProperty.call(localSettings, 'dbUser')) {
    dbUser = localSettings.dbUser;
} else {
    dbUser = process.env.DBUSER;
}

// Database pwd
let dbPwd = '';
if(Object.prototype.hasOwnProperty.call(localSettings, 'dbPwd')) {
    dbPwd = localSettings.dbPwd;
} else {
    dbPwd = process.env.DBPWD;
}

// Database connection
const dbConnection = `mongodb+srv://${dbUser}:${dbPwd}@${dbUrl}`;

module.exports = {
    appPort,
    appToken,
    appEnv,
    dbCluster,
    dbConnection
};
