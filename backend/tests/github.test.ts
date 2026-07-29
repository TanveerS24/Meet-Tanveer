import request from 'supertest';
import app from '../src/app';

describe('GET /api/v1/github/dashboard', () => {
  it('should return github dashboard structure (live or fallback metrics)', async () => {
    const res = await request(app).get('/api/v1/github/dashboard');
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.contributions).toBeDefined();
    expect(res.body.data.stats).toBeDefined();
    expect(res.body.data.languages).toBeDefined();
  });
});
