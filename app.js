const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to DevOps Demo App!',
        version: '1.0.0',
        status: 'healthy',
        timestamp: new Date().toISOString()
    });
});

app.get('/health', (req, res) => {
    res.json({ status: 'OK', uptime: process.uptime() });
});

app.get('/api/users', (req, res) => {
    res.json([
        { id: 1, name: 'Alice', role: 'Developer' },
        { id: 2, name: 'Bob', role: 'DevOps Engineer' },
        { id: 3, name: 'Charlie', role: 'Tester' }
    ]);
});

module.exports = app;
