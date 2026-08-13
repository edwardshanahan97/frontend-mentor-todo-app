import "./AddTodoForm.css";

const AddTodoForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const todo = data.get("todo");

    event.currentTarget.reset();

    console.log(todo.trim(""));
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
