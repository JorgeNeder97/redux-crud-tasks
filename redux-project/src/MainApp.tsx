import { TasksForm } from "#components/TasksForm.tsx";
import { Home } from "#components/Home.tsx";
import { Route, Routes } from "react-router-dom";

export const MainApp = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createTask" element={<TasksForm />} />
            <Route path="/editTask/:id" element={<TasksForm />} />
        </Routes>
    );
};
