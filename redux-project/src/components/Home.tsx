import { TasksList } from '#components/TasksList.tsx';
import { useNavigate } from "react-router-dom";
import { Header } from '#components/Header.tsx';


export const Home = () => {
    const navigate = useNavigate();

    const handleCreate = () => {
        navigate("/createTask");
    }

    return (
        <div className="main">
            <Header />
            <button onClick={handleCreate} className="bg-green-600 text-white w-[160px] h-[40px] rounded block mx-auto mb-4 font-kanit text-lg font-bold">Create New Task</button>
            <TasksList />
        </div>
    );
};
