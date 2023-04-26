const request = require('supertest');
const app = require('../app');
const { cookie } = require('./data.json');

// add time out to avoid jest open handle error
jest.setTimeout(30000);

describe('GET /api/consultant/:id', () => {
  it('should receive data for an existing consultant', () =>
    request(app)
      .get('/api/consultant/642e72c8f96e26e92be45b90')
      .set('Cookie', cookie)
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body).not.toBeNull();
      }));

  it('should not receive data for a non-existing consultant', () =>
    request(app)
      .get('/api/consultant/642e72c8f96e26e92be45b91')
      .set('Cookie', cookie)
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeNull();
      }));
});
