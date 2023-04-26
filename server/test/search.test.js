const request = require('supertest');
const app = require('../app');
const { cookie } = require('./data.json');

// add time out to avoid jest open handle error
jest.setTimeout(30000);

describe('GET /api/consultant', () => {
  it('should respond with a 200 status code', () =>
    request(app)
      .get('/api/consultant')
      .set('Cookie', cookie)
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
      }));
});
