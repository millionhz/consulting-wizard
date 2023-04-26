const request = require('supertest');
const app = require('../app');
const { cookie } = require('./data.json');

// add time out to avoid jest open handle error
jest.setTimeout(30000);

describe('GET /view', () => {
  it('should return all the reported feedback', async () => {
    const res = await request(app)
      .get('/api/feedback/view')
      .set('Cookie', cookie);
    expect(res.statusCode).toEqual(200);
    expect(res.body).not.toBeNull();
  });
});
