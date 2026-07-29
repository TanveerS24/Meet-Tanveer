import request from 'supertest';
import app from '../src/app';

describe('POST /api/v1/contact', () => {
  it('should validate contact submission payload and reject invalid email', async () => {
    const res = await request(app).post('/api/v1/contact').send({
      name: 'Test User',
      email: 'invalid-email',
      subject: 'Test Subject',
      message: 'Short message for testing',
    });

    expect(res.status).toBe(400);
    expect(res.body.success).toBe(false);
  });

  it('should accept valid contact submission', async () => {
    const res = await request(app).post('/api/v1/contact').send({
      name: 'John Doe',
      email: 'john@example.com',
      subject: 'Architecture Inquiry',
      message: 'Hello Tanveer, I would like to discuss enterprise software architecture.',
    });

    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data.message).toBeDefined();
  });
});
