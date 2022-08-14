import { client } from '../config/axios';

export type ITask = {
    id: number;
    title: string;
    description: string;
    completed: boolean;
    userId: number;
}

export type ITaskCreateParams = Pick<ITask, 'title' | 'description'>;

export async function getTasks() {
    const result = await client.get<ITask[]>('/tasks');
    return result.data;
}

export async function createTask(taskParams: ITaskCreateParams) {
    const result = await client.post('/tasks', taskParams);
    return result.data;
}