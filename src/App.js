import "./App.css";
import ToDoList from "./Components/ToDoBody/ToDoList/ToDoList";
import Author from "./Components/Footer/Author/Author";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="body-full body--dark">
      <Header />
      <ToDoList />
      <Author className="footer" />
    </div>
  );
}

export default App;
