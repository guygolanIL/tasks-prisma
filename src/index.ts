import { PrismaClient } from '@prisma/client';
import express, { Application, json } from 'express';
import cors from 'cors';
import path from 'path';

const port = process.env.PORT || 4000;
const app: Application = express();
const prisma = new PrismaClient();

app.use(json());
app.use(cors());

app.get('/user', async (req, res) => {
    const user = await prisma.user.findMany({
        include: {
            tasks: true
        }
    });
    res.send(user);
});

app.get('/addTask/:name', async (req, res) => {

    const task = await prisma.task.create({
        data: {
            title: req.params.name,
            description: `description: ${req.params.name}`,
            userId: 1
        }
    });

    res.send(task);
});

app.get('*', (req, res) => {
    const filePath = path.join(__dirname, 'public', 'index.html');
    console.log(`sending file from ${filePath}`);
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
