import { Button, styled, TextField } from "@mui/material";
import { useRef } from "react";
import { ITaskCreateParams } from "../../../data/tasks/api";

const ControlsWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
    borderBottom: `1px solid ${theme.palette.grey[200]}`,
    display: 'flex',
    justifyContent: 'space-between'
}));

export function Controls({ onAdd }: { onAdd: (params: ITaskCreateParams) => void }) {
    const titleRef = useRef<HTMLInputElement>(null);

    const onAddClicked = () => {
        const title = titleRef.current!.value;
        onAdd({
            title,
        });
        titleRef.current!.value = ''
    };

    return (
        <ControlsWrapper id='controls'>
            <TextField placeholder="Add a task" size="small" inputRef={titleRef} />
            <Button onClick={onAddClicked}>
                Add
            </Button>
        </ControlsWrapper>
    );
}