import { useAppSelector } from "#hooks";

export const TasksList = () => {
    const tasks = useAppSelector(state => state.tasks);

    return (
        <div className="w-full flex flex-col place-content-center">
            {tasks.map(task => (
                <div key={task.id}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                </div>
            ))}
        </div>
    );
};
