import { useTodo } from "../../context/TodoContext";

const TodoTabs = ({ className = "" }) => {
  const { setFilter, filter } = useTodo();

  return (
    <div className={`todo__tabs ${className}`}>
      <button
        className={`todo__tab ${filter === "all" ? "active" : ""}`}
        onClick={() => setFilter("all")}
        type="button"
      >
        All
      </button>

      <button
        className={`todo__tab ${filter === "active" ? "active" : ""}`}
        onClick={() => setFilter("active")}
        type="button"
      >
        Active
      </button>

      <button
        className={`todo__tab ${filter === "completed" ? "active" : ""}`}
        onClick={() => setFilter("completed")}
        type="button"
      >
        Completed
      </button>
    </div>
  );
};

export default TodoTabs;
