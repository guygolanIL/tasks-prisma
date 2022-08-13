import { PrismaClient } from '@prisma/client';
import express, { Application, json } from 'express';

const port = 4000;
const app: Application = express();
const prisma = new PrismaClient();

app.use(json());

async function start() {
    try {
        await prisma.$connect();
        const users = await prisma.user.findMany();
        console.log(users);

        const tasks = await prisma.task.findMany();
        console.log(tasks);
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
