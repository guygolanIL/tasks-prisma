import { PrismaClient } from '@prisma/client';
import express, { Application, json } from 'express';

const port = 4000;
const app: Application = express();
const prisma = new PrismaClient();

app.use(json());

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
