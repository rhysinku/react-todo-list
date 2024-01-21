import { useState } from "react";

// eslint-disable-next-line react/prop-types
const TodoForm = ({ onAddTasks }) => {

    const [taskName, setTaskName] = useState('');



    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!taskName) return;
        const setTask = {
            id: Date.now(),
            task:taskName,
            isComplete:false
        }
        onAddTasks(setTask)
        setTaskName('');
    }

    return (
        <form className="todo_form" onSubmit={handleSubmit}>
           <div className="todo_form__input">
            {/* <label htmlFor="todo_input">Add Task</label> */}
           <input type="text" placeholder="Add Task" id="todo_input" value={taskName} onChange={(e) => setTaskName(e.target.value)} />          
            </div>  
        </form>
    );
}

export default TodoForm;
