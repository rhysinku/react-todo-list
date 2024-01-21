const TodoStats = ({taskList , category , activeCategory ,onCategoryTask , onDeleteCompeleted}) => {

    const totalTask = taskList.filter(task => !task.isComplete).length

    

    return (
        <div className="todo_stats">
            <span>{totalTask} {totalTask < 2 ? `task` : `tasks`} left</span>
            <div className="todo_stats__category">
            {
                category.map(category=>
                     <section key={category} 
                     className={activeCategory === category ? `active` : ``}
                     onClick={()=> onCategoryTask(category)}>
                        {category}
                     </section>)
            }

                {/* <section className="active">All</section>
                <section>Active</section>
                <section>Completed</section> */}
            </div>
            <section onClick={onDeleteCompeleted}>Clear Completed</section>
        </div>
    );
}

export default TodoStats;
