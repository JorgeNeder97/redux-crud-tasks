
export const TasksForm = () => {


    return (
        <form className="form">
            <input type="text" placeholder="title" className="input" />
            <textarea name="description" placeholder="description" className="input" ></textarea>

            <button className="button">Save</button>
        </form>
    );
};
