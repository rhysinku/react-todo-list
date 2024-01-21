const TodoStats = () => {
    return (
        <div className="todo_stats">
            <span>0 task left</span>
            <div className="todo_stats__category">
                <section className="active">All</section>
                <section>Active</section>
                <section>Completed</section>
            </div>
            <section>Clear Completed</section>
        </div>
    );
}

export default TodoStats;
