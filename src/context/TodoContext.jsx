import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (text, id) => {
    setTodoList((prev) => [...prev, { text, id, completed: false }]);
  };

  return (
    <TodoContext.Provider value={{ todoList, addTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => useContext(TodoContext);
