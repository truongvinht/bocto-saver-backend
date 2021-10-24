// location.routes.test.js
// Testing location api
// ================

const app = require('./index');
const supertest = require('supertest');
const config = require('../config/configuration');

// api Endpoint
const LOCATIONS_ENDPOINT = `/api/locations`;

const hook = (method = 'get') => (args) =>
  supertest(app)
    [method](args)
    .set('authorization', config.appToken);

const request = {
  get: hook('get')
};

it('request all location', async done => {
    const response = await request.get(LOCATIONS_ENDPOINT);
    expect(response.status).toBe(200);
    const resultList = response.body;

    // result should not be empty
    expect(resultList.length).toBeGreaterThan(0);
    done();
});