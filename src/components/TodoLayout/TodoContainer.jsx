import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoListContainer from "./TodoListContainer";
import TodoStats from "./TodoStats";

const TodoContainer = () => {
  const [taskList, setTaskList] = useState([]);
  const category = ['All', 'Active', 'Completed']
  const [activeCategory, setActiveCategory] = useState(category[0]);

  let sortedTask;

  if(activeCategory === 'All') sortedTask = taskList
  if(activeCategory === 'Active') sortedTask = taskList.filter(task => !task.isComplete)
  if(activeCategory === 'Completed') sortedTask = taskList.filter(task => task.isComplete)

  const playground =taskList.filter(task => task.isComplete)


  const handleCatergory =(catergory) =>{
        setActiveCategory(catergory)
  }


  const handleAddTask = (task) => {
    setTaskList((tasks) => [...tasks, task]);
  };

  const handleDeleteTask = (id) => {
    setTaskList((tasks) => tasks.filter((task) => task.id !== id));
  };

  const handleCompleteTask = (id) => {
    setTaskList((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, isComplete: !task.isComplete } : task
      )
    );
  };

  const handleDeleteCompleted =()=>{
    setTaskList((tasks) => tasks.filter((task) => !task.isComplete))
  }

  

  return (
    <div className="todo_con">
      <h2>TO DO</h2>
      <TodoForm onAddTasks={handleAddTask} />
      <TodoListContainer
        sortedTask ={sortedTask}
        taskList={taskList}
        onDeleteTask={handleDeleteTask}
        onCompleteTask={handleCompleteTask}
      />
      <TodoStats  taskList={taskList} category={category} setActiveCategory={setActiveCategory} activeCategory={activeCategory}  onCategoryTask = {handleCatergory} onDeleteCompeleted={handleDeleteCompleted}/>
    </div>
  );
};

export default TodoContainer;
