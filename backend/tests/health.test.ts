import request from 'supertest';
import app from '../src/app';

describe('GET /api/v1/health', () => {
  it('should return status UP with 200 OK', async () => {
    const res = await request(app).get('/api/v1/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('UP');
    expect(res.body.service).toBe('portfolio-backend');
  });
});
