import { client } from '../config/axios';
import { urlBuilder } from '../url';

const taskUrlBuilder = () => urlBuilder().api().tasks();

export type ITask = {
    id: number;
    title: string;
    description: string;
    completed: boolean;
    userId: number;
}

export type ITaskCreateParams = Pick<ITask, 'title' | 'description'>;

export async function getTasks() {
    const url = taskUrlBuilder().build();
    const result = await client.get<ITask[]>(url);
    return result.data;
}

export async function createTask(taskParams: ITaskCreateParams) {
    const url = taskUrlBuilder().build();
    const result = await client.post<ITask>(url, taskParams);
    return result.data;
}