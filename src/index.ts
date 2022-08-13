import { PrismaClient } from '@prisma/client';
import express, { Application, json } from 'express';

const port = 4000;
const app: Application = express();
const prisma = new PrismaClient();

app.use(json());

async function start() {
    try {
        await prisma.$connect();
        const user = await prisma.user.findFirst();
        console.log(user);
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
