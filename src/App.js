import "./App.css";
import Card from "./Components/Layout/Card/Card";
import Author from "./Components/Footer/Author/Author";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="body-full body--dark">
      <Header />
      <Card></Card>
      <Author className="footer" />
    </div>
  );
}

export default App;
