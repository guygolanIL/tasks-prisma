import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ITask } from "../../data/tasks/api";

const TaskWrapper = styled('div')(({ theme }) => ({
    borderBottom: `1px solid ${theme.palette.grey[200]}`,
    padding: theme.spacing(1),
}));

export function Task({ task }: { task: ITask }) {
    return (
        <TaskWrapper id='task'>
            <Typography color='black' variant="h5">{task.title}</Typography>
            <Typography color='black' variant="body1">{task.description}</Typography>
        </TaskWrapper>
    );
}