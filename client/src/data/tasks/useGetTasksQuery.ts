import { useQuery } from '@tanstack/react-query';
import { getTasks } from './api';

export const tasksQueryKey = 'tasks';
export function useGetTasksQuery() {
    return useQuery([tasksQueryKey], () => getTasks());
}