import "./App.css";
import { useState } from "react";
import ToDoList from "./Components/ToDoBody/ToDoList/ToDoList";
import Author from "./Components/Footer/Author/Author";
import Header from "./Components/Header/Header";
import ModeContext from "./store/Mode/mode-context";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const onChangeModeHandler = () => {
    setDarkMode(() => !darkMode);
  };
  const mode = darkMode ? "dark" : "light";
  return (
    <ModeContext.Provider value={{ darkMode: darkMode }}>
      <div className={`body-full body--${mode}`}>
        <Header onChangeMode={onChangeModeHandler} />
        <ToDoList />
        <Author className="footer" />
      </div>
    </ModeContext.Provider>
  );
}

export default App;
