import { Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ITask } from "../../data/tasks/api";

const TaskWrapper = styled('div')(({ theme }) => ({
    borderBottom: `1px solid ${theme.palette.grey[200]}`,
    padding: theme.spacing(1),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}));

const TaskInfo = styled('div')(({ theme }) => ({}));

const TaskActions = styled('div')(({ theme }) => ({}));

export type ITaskProps = {
    task: ITask;
    onDelete: () => void;
}

export function Task({ task, onDelete }: ITaskProps) {
    return (
        <TaskWrapper id='task'>
            <TaskInfo>
                <Typography color='black' variant="h5">{task.title}</Typography>
                <Typography color='black' variant="body1">{task.description}</Typography>
            </TaskInfo>

            <TaskActions>
                <Button onClick={onDelete}>Delete</Button>
            </TaskActions>
        </TaskWrapper>
    );
}