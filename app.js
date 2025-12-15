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
app.get('/api/info', (req, res) => {
    res.json({
        app: 'DevOps Demo',
        environment: process.env.NODE_ENV || 'development',
        nodeVersion: process.version,
        platform: process.platform
    });
});

module.exports = app;
