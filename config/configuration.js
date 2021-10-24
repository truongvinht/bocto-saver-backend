// configure.js
// handle application variables
// ==================

// Get port from environment and store in Express.
const appPort = process.env.PORT || '3000';

// Token for API access
const appToken = process.env.TOKEN || 'sample';

// environment variable
const appEnv = process.env.NODE_ENV || 'testing';

module.exports = {
    appPort,
    appToken,
    appEnv
};
