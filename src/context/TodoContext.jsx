import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTodo = (text, id) => {
    setTodoList((prev) => [...prev, { text, id, completed: false }]);
  };

  const clearTodoList = () => setTodoList([]);

  const completeTodo = (id, completed) => {
    setTodoList((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: completed };
        } else {
          return todo;
        }
      });
    });
  };

  const completedTodos = () =>
    setTodoList(todoList.filter((todo) => todo.completed === true));

  const allTodos = () => todoList.filter((todo) => todo);

  return (
    <TodoContext.Provider
      value={{
        todoList,
        addTodo,
        clearTodoList,
        allTodos,
        completeTodo,
        completedTodos,
        setFilter,
        filter,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => useContext(TodoContext);
