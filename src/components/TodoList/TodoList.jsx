import { useTodo } from "../../context/TodoContext";
import "./TodoList.css";
import CheckIcon from "../../assets/icons/icon-check.svg";
import RemoveIcon from "../../assets/icons/icon-remove.svg";
import TodoTabs from "../TodoTabs/TodoTabs";

const TodoList = () => {
  const { todoList, clearTodoList, completeTodo, filter, removeTodo } =
    useTodo();

  const count = todoList.filter((todo) => todo.completed === false).length;

  let filteredTodos = todoList;

  if (filter === "completed") {
    filteredTodos = todoList.filter((todo) => todo.completed === true);
  } else if (filter === "active") {
    filteredTodos = todoList.filter((todo) => todo.completed === false);
  } else {
    filteredTodos = todoList;
  }

  return (
    <section className="todo">
      <ul className="todo__list">
        {filteredTodos.map((todo) => (
          <li className="todo__item" key={todo.id}>
            <label className="todo__checkbox">
              <input
                onChange={(event) =>
                  completeTodo(todo.id, event.target.checked)
                }
                type="checkbox"
                value={todo.completed}
                checked={todo.completed}
              />

              <span className="todo__checkmark">
                <img src={CheckIcon} alt="Check Icon" />
              </span>
            </label>

            <span className="todo__text">{todo.text}</span>

            <button
              onClick={() => removeTodo(todo.id)}
              className="todo__remove"
            >
              <img src={RemoveIcon} alt="Remove Icon" />
            </button>
          </li>
        ))}
      </ul>

      <div className="todo__controls">
        <p className="todo__count">{count} items left</p>

        <TodoTabs className="todo__tabs-desktop" />

        <button onClick={clearTodoList} className="todo__clear" type="button">
          Clear Completed
        </button>
      </div>
    </section>
  );
};

export default TodoList;
