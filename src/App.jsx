import AddTodoForm from "./components/AddTodoForm/AddTodoForm";
import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar";
import TodoList from "./components/TodoList/TodoList";
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
      </main>
    </div>
  );
};

export default App;
