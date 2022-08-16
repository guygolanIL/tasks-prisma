import { styled } from "@mui/material";
import { ITaskCreateParams } from "../../data/tasks/api";
import { taskHooks } from '../../data/tasks/hooks';
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
    const { data: tasks, isLoading } = taskHooks.useGetTasksQuery();
    const { mutate: createTask } = taskHooks.useCreateTaskMutation();
    const { mutate: deleteTask } = taskHooks.useDeleteTaskMutation();

    if (isLoading) return <span>Loading...</span>;

    const onCreate = (params: ITaskCreateParams) => {
        if (!params) return;
        if (!params.title) return;
        createTask({
            ...params
        });
    };

    const onDelete = (taskId: number) => {
        deleteTask(taskId)
    };

    return (
        <TasksMain id='tasks-main'>
            <Controls onAdd={(title) => onCreate(title)} />
            {tasks?.map(task => <Task key={task.id} task={task} onDelete={() => onDelete(task.id)} />)}
        </TasksMain>
    );
}