// configure.js
// handle application variables
// ==================

// load configuration with DOTENV
require('dotenv').config()

// Get port from environment and store in Express.
const appPort = process.env.PORT || '3000';

// Token for API access
const appToken = process.env.TOKEN || 'sample';

// Database CLUSTER
const dbCluster = process.env.DB_CLUSTER;

// Database URL
const dbUrl = process.env.DB_URL;

// Database User
const dbUser = process.env.DB_USER;

// Database User
const dbPwd = process.env.DB_PWD;

// Database name: default is dev database for testing
const dbName = process.env.DB_NAME || 'DEV';

// Database connection
const dbConnection = `mongodb+srv://${dbUser}:${dbPwd}@${dbUrl}`;

module.exports = {
    appPort,
    appToken,
    dbCluster,
    dbConnection,
    dbName
};
