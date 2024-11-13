import { useAppSelector, useAppDispatch } from "#hooks";
import { deleteTask } from '#features/tasks/taskSlice.ts';
import { useNavigate } from "react-router-dom";

export const TasksList = () => {
    const tasks = useAppSelector(state => state.tasks);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleDelete = (id:string) => {
        dispatch(deleteTask(id));
    }

    const handleEdit = (id:string) => {
        navigate(`/editTask/${id}`);
    }

    return (
        <div className="list-container">
            {tasks.map(task => (
                <div key={task.id} className="flex flex-col place-content-between mb-12">
                    <div className="flex flex-col place-items-start gap-2">
                        <h3 className="text-black text-lg font-bold pl-2 dark:text-white">{task.title}</h3>
                        <p className="text-black mb-4 dark:text-white">{task.description}</p>
                    </div>
                    <div className="flex place-content-center gap-4">
                        <button onClick={() => handleEdit(task.id)} className="bg-sky-600 text-white rounded w-[80px] h-[40px]">Edit</button>
                        <button onClick={() => handleDelete(task.id)} className="bg-red-600 text-white rounded w-[80px] h-[40px]">Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
};
