import "./App.css";
import Author from "./Components/Footer/Author/Author";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="body-full body--dark">
      <Header />
      <Author className="footer" />
    </div>
  );
}

export default App;
