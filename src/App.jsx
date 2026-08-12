import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className="app">
      <Background />
      <main>
        <Navbar />
      </main>
    </div>
  );
};

export default App;
