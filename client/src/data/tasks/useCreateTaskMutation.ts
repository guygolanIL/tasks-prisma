import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../config/queryClient";
import { createTask, ITaskCreateParams } from './api';
import { tasksQueryKey } from "./useGetTasksQuery";

export function useCreateTaskMutation() {
    return useMutation((taskParams: ITaskCreateParams) => createTask(taskParams), {
        onSuccess: (data) => {
            queryClient.invalidateQueries([tasksQueryKey]);
        }
    });
}