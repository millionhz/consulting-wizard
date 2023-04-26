const request = require('supertest');
const app = require('../app');
const { cookie } = require('./data.json');

// add time out to avoid jest open handle error
jest.setTimeout(30000);

describe('GET /api/client/:id', () => {
  it('should receive data for an existing client', () =>
    request(app)
      .get('/api/client/6432f911d3ebbfec18f31a4e')
      .set('Cookie', cookie)
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body).not.toBeNull();
      }));

  it('should not receive data for a non-existing client', () =>
    request(app)
      .get('/api/client/6432f911d3ebbfec18f31a4f')
      .set('Cookie', cookie)
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeNull();
      }));
});
