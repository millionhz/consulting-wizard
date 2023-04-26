const request = require('supertest');
const app = require('../app');
const { cookie } = require('./data.json');

// add time out to avoid jest open handle error
jest.setTimeout(30000);

describe('PATCH /api/profile', () => {
  it('should respond with a 200 status code', () =>
    request(app)
      .patch('/api/profile')
      .send({
        displayName: 'test',
        email: '',
        major: 'CS',
        yearOfGraduation: 2021,
        bio: 'test bio',
      })
      .set('Cookie', cookie)
      .then((response) => expect(response.statusCode).toBe(200)));
});

describe('GET /api/profile', () => {
  it('should respond with the profile information', () =>
    request(app)
      .get('/api/profile')
      .set('Cookie', cookie)
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeDefined();
      }));
});
