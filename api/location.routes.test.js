// location.routes.test.js
// Testing location api
// ================

const app = require('./index');
const request = require('supertest');
const CONFIG = require('../config/configuration');
const DatabaseManager = require('./../services/databaseManager');

// api Endpoint
const LOCATIONS_ENDPOINT = `/api/locations`;

describe('GET '+LOCATIONS_ENDPOINT, () => {


  afterAll(async () => {
    await DatabaseManager.getInstance().disconnect();
  });

  // token not being sent - should respond with a 403
  // it('It should require authorization', async () => {
  //   const response = await request(app)
  //     .get(LOCATIONS_ENDPOINT);
  //   expect(response.statusCode).toBe(403);
  // });

  it('request all location',() => {
    request(app)
      .get(LOCATIONS_ENDPOINT)
      .set('Authorization', CONFIG.appToken)
      .set('Content-type', 'application/json');
      // .end((err, res) => {
      //   if (err) {
      //     return done(err);
      //   } else {
      //     expect(res.body).not.toBeNull();
      //   }
      // });
    
  });

  it('create a new location', async () => {
    const location = 
    {
      street: 'test',
      zip: '10000',
      city: 'Berlin',
      country: 'Germany'
    };

    const resp = await request(app)
      .post(LOCATIONS_ENDPOINT)
      .set('authorization', CONFIG.appToken)
      .set('Content-type', 'application/json')
      .send({ location });
      expect(resp.body).not.toBeNull();
  },8000);

  // it('delete an existing location', async () => {
  //   const location = 
  //   {
  //     street: 'test',
  //     zip: '10000',
  //     city: 'Berlin',
  //     country: 'Germany'
  //   };

  //   const resp = await supertest(app)
  //     .delete(LOCATIONS_ENDPOINT)
  //     .set('authorization', CONFIG.appToken)
  //     .set('Content-type', 'application/json')
  //     .send({ location });
  //     expect(resp.body).not.toBeNull();
  // },10000);

});

// const hook_get = (method = 'get') => (args) =>
//   supertest(app)
//     [method](args)
//     .set('authorization', CONFIG.appToken);

// const hook_post = (method = 'post') => (args) =>
//   supertest(app)
//     [method](args)
//     .set('authorization', CONFIG.appToken);

// const request = {
//   get: hook_get('get'),
//   post: hook_post('post')
// };

// beforeEach(() => {
//   DatabaseManager.getInstance().connect();
// });

// afterEach(() => {
//   DatabaseManager.getInstance().disconnect();
// });

// it('request all location', async done => {
//     const response = await request.get(LOCATIONS_ENDPOINT);
//     expect(response.status).toBe(200);
//     const resultList = response.body;
//     // result should not be empty
//     expect(resultList).not.toBeNull();
//     console.log('finished request');
//     done();
// },10000);

// it('create a new location', async done => {
//   const response = await request.post(LOCATIONS_ENDPOINT);

//   const body = 
//   {
//   street: 'test',
//   zip: '10000',
//   city: 'Berlin',
//   country: 'Germany'
//   };


//   expect(response.status).toBe(200);
//   done();
// },10000);

it.todo('request location by city');
it.todo('update an existing location');