import express from 'express';
import type { Data1Format } from 'server';

const app = express();

app.use(express.json());

app.post('/data1', (req, res) => {
    const data: Data1Format = req.body;
    console.log(`${data.name} is ${data.age} years old`);
});

app.use(express.static('static'))

const server = app.listen(3000, () => {
    console.log('Server started at http://localhost:3000');
});
