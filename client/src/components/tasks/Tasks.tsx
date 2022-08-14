import { styled } from "@mui/material";
import { useRef } from "react";
import { useCreateTaskMutation } from "../../data/tasks/useCreateTaskMutation";
import { useGetTasksQuery } from "../../data/tasks/useGetTasksQuery";
import { Task } from "./Task";

const TasksMain = styled('div')(({ theme }) => ({
    backgroundColor: 'red',
}));

export function Tasks() {
    const { data: tasks, isLoading } = useGetTasksQuery();
    const { mutate } = useCreateTaskMutation();
    const titleRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLInputElement>(null);

    if (isLoading) return <span>Loading...</span>;

    const onCreate = () => {
        mutate({
            title: titleRef.current?.value || '',
            description: descriptionRef.current?.value || '',
        });
    }

    return (
        <TasksMain>
            <input ref={titleRef} type='text' placeholder='title' />
            <input ref={descriptionRef} type='text' placeholder='descscription' />
            <button onClick={onCreate}>Create</button>
            {tasks?.map(task => <Task key={task.id} task={task} />)}
        </TasksMain>
    );
}