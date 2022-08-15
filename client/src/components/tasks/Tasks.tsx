import { Button, styled } from "@mui/material";
import { useRef } from "react";
import { ITaskCreateParams } from "../../data/tasks/api";
import { useCreateTaskMutation } from "../../data/tasks/useCreateTaskMutation";
import { useGetTasksQuery } from "../../data/tasks/useGetTasksQuery";
import { Controls } from "./Controls/Controls";
import { Task } from "./Task";

const TasksMain = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.common.white,
    width: '40vw',
    height: '70vh',
    margin: 'auto',
    borderRadius: theme.shape.borderRadius,
}));

export function Tasks() {
    const { data: tasks, isLoading } = useGetTasksQuery();
    const { mutate } = useCreateTaskMutation();

    if (isLoading) return <span>Loading...</span>;

    const onCreate = (params: ITaskCreateParams) => {
        if (!params) return;
        if (!params.title) return;
        mutate({
            ...params
        });
    }

    return (
        <TasksMain id='tasks-main'>
            <Controls onAdd={(title) => onCreate(title)} />
            {tasks?.map(task => <Task key={task.id} task={task} />)}
        </TasksMain>
    );
}