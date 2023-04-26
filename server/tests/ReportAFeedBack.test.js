const request = require('supertest');
const app = require('../app');
const { cookie } = require('./data.json');

// add time out to avoid jest open handle error
jest.setTimeout(30000);

describe('POST api/feedback/report/:id', () => {
    
  it('should report a feedback that does exist in the database', async () => {
    const res = await request(app)
      .post('/api/feedback/report/643793e3cf2d086496cd73f4')
      .set('Cookie', cookie);
    expect(res.statusCode).toEqual(200);
  });

  it('should not report a feedback that does not exist in the database', async () => {
    const res = await request(app)
      .get('/api/feedback/report/643793e3cf2d086496cd73f4')
      .set('Cookie', cookie);
    expect(res.statusCode).toEqual(404);
  });

});
