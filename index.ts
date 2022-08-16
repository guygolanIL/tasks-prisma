require('express-async-errors');
import express, { Application, json } from 'express';
import cors from 'cors';
import path from 'path';
import { apiRouter } from './routers/api';
import { prisma } from './prisma/client';
import { errorHandler } from './middlewares/errors/error-handler';

const port = process.env.PORT || 4000;
const app: Application = express();

app.use(json());
app.use(cors());
app.use(express.static('public'));

app.use('/api', apiRouter);

app.get('/app', (req, res) => {
    const filePath = path.join(__dirname, 'public', 'index.html');
    res.sendFile(filePath);
});

app.use(errorHandler);

async function start() {
    try {
        await prisma.$connect();

        app.listen(port, () => {
            console.log(`Server started at port ${port}`);
        });
    } catch (error) {
        console.log(error);
    } finally {
        await prisma.$disconnect();
    }
}

start();
