import { useTodo } from "../../context/TodoContext";
import "./TodoList.css";
import CheckIcon from "../../assets/icons/icon-check.svg";
import RemoveIcon from "../../assets/icons/icon-remove.svg";

const TodoList = () => {
  const { todoList } = useTodo();
  return (
    <section className="todo">
      <ul className="todo__list">
        {todoList.map((todo) => (
          <li className="todo__item" key={todo.id}>
            <label className="todo__checkbox">
              <input type="checkbox" />

              <span className="todo__checkmark">
                <img src={CheckIcon} alt="Check Icon" />
              </span>
            </label>

            <span className="todo__text">{todo.text}</span>

            <button className="todo__remove">
              <img src={RemoveIcon} alt="Remove Icon" />
            </button>
          </li>
        ))}
      </ul>

      <div className="todo__controls">
        <div className="todo__footer">
          <p className="todo__count">5 items left</p>

          <button className="todo__clear" type="button">
            Clear Completed
          </button>
        </div>

        <div className="todo__tabs">
          <button className="todo__tab todo__tab--active" type="button">
            All
          </button>

          <button className="todo__tab" type="button">
            Active
          </button>

          <button className="todo__tab" type="button">
            Completed
          </button>
        </div>
      </div>
    </section>
  );
};

export default TodoList;
