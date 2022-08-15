import { Router } from 'express';
import { prisma } from '../../prisma/client';
import z from 'zod';

export const tasksRouter = Router();

tasksRouter.get('/', async (req, res) => {
    const tasks = await prisma.task.findMany();
    res.send(tasks);
});

const taskCreateParamsSchema = z.object({
    title: z.string(),
    description: z.string().optional(),
});

type ITaskCreateParams = z.infer<typeof taskCreateParamsSchema>;

tasksRouter.post('/', async (req, res) => {
    const taskParams: ITaskCreateParams = req.body;
    taskCreateParamsSchema.parse(taskParams);


    const newTask = await prisma.task.create({
        data: {
            title: taskParams.title,
            description: taskParams.description,
            userId: 1
        }
    });

    res.send(newTask);
});