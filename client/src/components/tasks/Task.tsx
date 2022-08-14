import { ITask } from "../../data/tasks/api";

export function Task({ task }: { task: ITask }) {
    return (
        <div>
            <h3>{task.title}</h3>
            <div>{task.description}</div>
        </div>
    );
}