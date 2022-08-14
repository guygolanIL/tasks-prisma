import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ITask } from "../../data/tasks/api";

const TaskCard = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
}));

export function Task({ task }: { task: ITask }) {
    return (
        <TaskCard>
            <Typography color='black' variant="h5">{task.title}</Typography>
            <Typography color='black' variant="body1">{task.description}</Typography>
        </TaskCard>
    );
}