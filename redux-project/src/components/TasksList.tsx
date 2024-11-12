import { useAppSelector, useAppDispatch } from "#hooks";
import { deleteTask } from '#features/tasks/taskSlice.ts';

export const TasksList = () => {
    const tasks = useAppSelector(state => state.tasks);
    const dispatch = useAppDispatch();

    const handleDelete = (id:string) => {
        dispatch(deleteTask(id));
    }

    return (
        <div className="w-full flex flex-col place-content-center">
            {tasks.map(task => (
                <div key={task.id}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <button onClick={() => handleDelete(task.id)}>❌</button>
                </div>
            ))}
        </div>
    );
};
