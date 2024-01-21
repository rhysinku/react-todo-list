import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoListContainer from "./TodoListContainer";
import TodoStats from "./TodoStats";


const TodoContainer = () => {
    const [taskList, setTaskList] = useState([]);

    const handleAddTask = (task)=>{
        setTaskList((tasks) => [...tasks , task])
    }

    const handleDeleteTask = (id) =>{
        setTaskList((tasks) => tasks.filter(task => task.id !== id))
    }

    const handleCompleteTask = (id) => {
        setTaskList((tasks) => tasks.map((task)=> task.id === id ? {...task, isComplete: !task.isComplete} : task))
    }

    return (
        <div className="todo_con">
            <h2>TO DO</h2>
            <TodoForm onAddTasks={handleAddTask}/>
            <TodoListContainer taskList ={taskList} onDeleteTask = {handleDeleteTask} onCompleteTask = {handleCompleteTask}/>
            <TodoStats/>
        </div>
    );
}

export default TodoContainer;


