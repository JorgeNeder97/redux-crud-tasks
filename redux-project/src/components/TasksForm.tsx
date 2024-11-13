import { Header } from '#components/Header.tsx';
import { addTask } from '#features/tasks/taskSlice.ts';
import { useAppDispatch } from '#hooks';
import { Task } from '#models/Task.ts';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

export const TasksForm = () => {

    const params = useParams();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const dispatch = useAppDispatch();

    const onSubmit = handleSubmit((data) => {
        const task:Task = {
            id: uuid(),
            title: data.title,
            description: data.description,
            completed: false
        }
        if(params.id) {
            
        } else dispatch(addTask(task));
    });

    return (
        <div className="main">
            <Header />
            <form className="form" onSubmit={onSubmit}>
                <div className="input-group">
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
                    <span className={errors && errors.title ? 'error' : 'hidden-error'}>{errors.title && errors.title.message ? errors.title.message.toString() : ''}</span>
                </div>
                
                <div className="input-group">
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
                    <span className={errors && errors.description ? 'error' : 'hidden-error'}>{errors.description && errors.description.message ? errors.description.message.toString() : ''}</span>
                </div>

                <button className="button" type='submit'>Save</button>
            </form>
        </div>
    );
};
