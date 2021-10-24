// app.js
// Main file to launch server application
// ==================

const app = require('./api/index');
const config = require('./config/configuration');
const LogHelper = require('./loaders/loghelper');
const logger = LogHelper.getInstance();

// START THE SERVER
// =============================================================================
app.listen(config.appPort, () => {
    logger.info(`Server listening at http://localhost:${config.appPort}`);
});
