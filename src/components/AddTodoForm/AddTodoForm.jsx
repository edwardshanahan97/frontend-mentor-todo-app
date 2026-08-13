import { useTodo } from "../../context/TodoContext";
import "./AddTodoForm.css";

const AddTodoForm = () => {
  const { todoList, addTodo } = useTodo();
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const todo = data.get("todo");

    const id = crypto.randomUUID();

    addTodo(todo, id);

    event.currentTarget.reset();

    console.log(todoList);
  };
  return (
    <form onSubmit={handleSubmit} className="add-todo">
      <label>
        <span className="add-todo__circle"></span>

        <input placeholder="Create a new todo…" type="text" name="todo" />
      </label>
    </form>
  );
};

export default AddTodoForm;
