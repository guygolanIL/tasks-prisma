import { PrismaClient } from '@prisma/client';
import express, { Application, json } from 'express';
import cors from 'cors';
import path from 'path';

const port = process.env.PORT || 4000;
const app: Application = express();
const prisma = new PrismaClient();

app.use(json());
app.use(cors());
app.use(express.static('public'));

app.get('/user', async (req, res) => {
    const user = await prisma.user.findMany({
        include: {
            tasks: true
        }
    });
    res.send(user);
});

app.get('/tasks', async (req, res) => {

    const task = await prisma.task.create({
        data: {
            title: 'my task',
            description: `my description`,
            userId: 1
        }
    });

    res.send(task);
});

app.get('/app', (req, res) => {
    const filePath = path.join(__dirname, 'public', 'index.html');
    res.sendFile(filePath);
});

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
