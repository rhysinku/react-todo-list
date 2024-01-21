
const TodoListContainer = ({sortedTask, taskList, onDeleteTask, onCompleteTask}) => {


    return (
        <div className="todo_list">
            { !sortedTask.length > 0 ? <p className="empty">Task is Empty</p> :
             sortedTask.map((task) => 
                 <section className={`todo_list__item ${task.isComplete ? `todo_complete`: ``}`} key={task.id}>
                 <div className="todo_checkbox">
                 <input type="checkbox"  value={task.isComplete}  onChange={()=> onCompleteTask(task.id)} />
                 </div>
                <span>{task.task}</span>
                <button className="todo_btn" onClick={()=>onDeleteTask(task.id)}>X</button>
             </section>
            )
            }

            

        </div>
    );
}

export default TodoListContainer;
