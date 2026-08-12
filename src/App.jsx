import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar";
import { useTheme } from "./context/ThemeContext";

const App = () => {
  const { theme } = useTheme();

  console.log(theme);

  return (
    <div className="app" data-theme={theme}>
      <Background />
      <main>
        <Navbar />
      </main>
    </div>
  );
};

export default App;
