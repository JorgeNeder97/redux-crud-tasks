import { TasksForm } from '#components/TasksForm.tsx';
import { TasksList } from '#components/TasksList.tsx';


export const App = () => {

    return (
        <div className="main">
            <h1 className="text-3xl text-center font-bold">Hello World!</h1>

            <TasksForm />
            <TasksList />
        </div>
    );
};
