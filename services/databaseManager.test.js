// location.routes.test.js
// Testing location api
// ================

const request = require('supertest');
const CONFIG = require('../config/configuration');
const DatabaseManager = require('./databaseManager');

// api Endpoint
const LOCATIONS_ENDPOINT = `/api/locations`;

describe('Test Mongoose DB Connection', () => {


  afterAll(async () => {
    await DatabaseManager.getInstance().disconnect();
  });

//   it('connect database', async () => {
//     await DatabaseManager.getInstance().connect();
//   });

    it.todo('connect database');

});
