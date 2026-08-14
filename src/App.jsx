import AddTodoForm from "./components/AddTodoForm/AddTodoForm";
import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar";
import TodoList from "./components/TodoList/TodoList";
import TodoTabs from "./components/TodoTabs/TodoTabs";
import { useTheme } from "./context/ThemeContext";

const App = () => {
  const { theme } = useTheme();

  console.log(theme);

  return (
    <div className="app" data-theme={theme}>
      <Background />
      <main>
        <Navbar />

        <AddTodoForm />

        <TodoList />

        <TodoTabs className="todo__tabs-mobile" />

        <div className="app__text">Drag and drop to reorder list</div>
      </main>
    </div>
  );
};

export default App;
