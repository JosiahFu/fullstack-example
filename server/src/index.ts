import express from 'express';
import type { Data1Format } from 'server';

// Create an Express app
const app = express();

// Parse any JSON
app.use(express.json());

// When data is POSTed to /data1
app.post('/data1', (req, res) => {
    const data: Data1Format = req.body;
    console.log(`${data.name} is ${data.age} years old`);

    res.end(); // Send no data back
});

// Serve files from './static'
app.use(express.static('static'))

// Listen on port 3000
const server = app.listen(3000, () => {
    console.log('Server started at http://localhost:3000');
});
