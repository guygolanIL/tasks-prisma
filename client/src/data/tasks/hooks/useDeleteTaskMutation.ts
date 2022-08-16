import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../config/queryClient";
import { deleteTask } from "../api";
import { tasksQueryKey } from "./useGetTasksQuery";

export function useDeleteTaskMutation() {
    return useMutation((taskId: number) => deleteTask(taskId), {
        onSuccess: (data) => {
            queryClient.invalidateQueries([tasksQueryKey]);
        }
    });
}