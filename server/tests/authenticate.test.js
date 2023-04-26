const request = require('supertest');
const app = require('../app');
const { cookie } = require('./data.json');

describe('GET /api/authenticate', () => {
  it('should respond with a 401 status code', () =>
    request(app)
      .get('/api/authenticate')
      .then((response) => expect(response.statusCode).toBe(401)));
});

describe('GET /api/authenticate', () => {
  it('should respond with a 200 status code', () =>
    request(app)
      .get('/api/authenticate')
      .set('Cookie', cookie)
      .then((response) => expect(response.statusCode).toBe(200)));
});
