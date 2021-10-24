// loghelper.test.js
// Testing logger
// ================

const LogHelper = require('./loghelper');
const logger = LogHelper.getInstance();

it('test error log', () =>  {
    logger.error('error log');
});

it('test debug log', () =>  {
    logger.debug('debug log');
});

it('test info log', () =>  {
    logger.info('info log');
});

it('test set log level to debug', () =>  {
    logger.setLoglevel('debug');
});

it('test set log level to info', () =>  {
    logger.setLoglevel('info');
});

it('test debug with args', () =>  {
    logger.debugWithArgs('GET', 'debug', 'debug arg', 'parameter'); 
    logger.debugWithArgs('GET', 'debug', 'debug arg'); 
});

it('test errror with args', () =>  {
    logger.errorWithArgs('GET', 'error', 'error arg', 'parameter'); 
    logger.errorWithArgs('GET', 'error', 'error arg'); 
});