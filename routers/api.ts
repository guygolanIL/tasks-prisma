import { Router } from 'express';
import { tasksRouter } from './tasks/tasks';
import { usersRouter } from './users/users';

export const apiRouter = Router();

apiRouter.use('/tasks', tasksRouter);
apiRouter.use('/users', usersRouter);