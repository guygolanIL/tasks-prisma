import { Router } from 'express';
import { prisma } from '../../prisma/client';

export const usersRouter = Router();

usersRouter.get('/', async (req, res) => {
    const users = await prisma.user.findMany();
    res.send(users);
});