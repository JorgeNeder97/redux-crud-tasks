import { createSlice } from "@reduxjs/toolkit";
import { Task } from '#models/Task.ts';


const initialState: Task[] = [
    {
        id: "1",
        title: "Task 1",
        description: "Task 1 description",
        completed: false,
    },
    {
        id: "2",
        title: "Task 2",
        description: "Task 2 description",
        completed: false,
    },
];

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {

    }
});



export default taskSlice.reducer;