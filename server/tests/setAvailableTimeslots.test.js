const request = require('supertest');
const app = require('../app');
const { cookie } = require('./data.json');

describe('POST /api/appointment/consultant', () => {
  it('should respond with a 200 status code', () =>
    request(app)
      .post('/api/appointment/consultant')
      .send({
        from: '2023-04-28T13:00:00.000+00:00',
        to: '2023-04-28T14:00:00.000+00:00',
      })
      .set('Cookie', cookie)
      .then((response) => expect(response.statusCode).toBe(200)));
});

describe('GET /api/appointment/consultant', () => {
  it('should respond with the added appointment', () =>
    request(app)
      .get(
        '/api/appointment/consultant/?from=2023-04-27T19:00:00.000Z&to=2023-04-28T19:00:00.000Z'
      )
      .set('Cookie', cookie)
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
      }));
});
