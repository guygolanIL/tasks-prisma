import { Router } from 'express';
import { prisma } from '../../prisma/client';
import z from 'zod';
import { validateRequest } from '../validator';

export const tasksRouter = Router();

tasksRouter.get('/', async (req, res) => {
    const tasks = await prisma.task.findMany();
    res.send(tasks);
});



tasksRouter.post('/', async (req, res) => {
    const taskParams = validateRequest(z.object({
        body: z.object({
            title: z.string(),
            description: z.string().optional(),
        })
    }), req).body;

    const newTask = await prisma.task.create({
        data: {
            title: taskParams.title,
            description: taskParams.description,
            userId: 1
        }
    });

    res.send(newTask);
});

tasksRouter.delete('/', async (req, res) => {
    const { id } = validateRequest(z.object({
        query: z.object({
            id: z.string().regex(/^\d+$/).transform(Number)
        })
    }), req).query;


    const deletedTask = await prisma.task.delete({
        where: {
            id
        }
    });

    res.send(deletedTask);
});