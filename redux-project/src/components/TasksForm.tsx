import { addTask } from '#features/tasks/taskSlice.ts';
import { useAppDispatch } from '#hooks';
import { useForm } from 'react-hook-form';

export const TasksForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const dispatch = useAppDispatch();

    const onSubmit = handleSubmit((data) => {
        dispatch(addTask(data.title));
    });

    return (
        <form className="form" onSubmit={onSubmit}>
            <input 
                type="text" 
                placeholder="title" 
                className="input"
                {...register("title", {
                    required: {
                        value: true,
                        message: "You must write the title of the task"
                    },
                    minLength: {
                        value: 3,
                        message: "The task title must be at least 3 characters"
                    }
                })}
            />
            <textarea 
                placeholder="description"
                className="input"
                {...register("description", {
                    required: {
                        value: true,
                        message: 'You must write the description of the task'
                    },
                    minLength: {
                        value: 10,
                        message: "The task description must be at least 10 characters"
                    },
                    maxLength: {
                        value: 200,
                        message: "The limit of characters that the description can have is 200"
                    }
                })}
                ></textarea>

            <button className="button" type='submit'>Save</button>
        </form>
    );
};
