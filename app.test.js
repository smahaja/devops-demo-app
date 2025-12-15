const request = require('supertest');
const app = require('./app');

describe('API Endpoints', () => {
    
    test('GET / should return welcome message', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe('Welcome to DevOps Demo App!');
        expect(response.body.status).toBe('healthy');
    });

    test('GET /health should return OK status', async () => {
        const response = await request(app).get('/health');
        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe('OK');
    });

    test('GET /api/users should return user list', async () => {
        const response = await request(app).get('/api/users');
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBe(3);
    });
});
