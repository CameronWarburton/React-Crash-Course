import "./App.css";
import Todo from "./components/Todo.jsx";
import Title from "./components/Title.jsx";
import Modal from "./components/Modal.jsx";

function App() {
  return (
    <div>
      <Title />
      <div>
        <input type="text" />
        <button>Add todo</button>
      </div>
      <div className="todo__wrapper">
        <Todo title="Finish Frontend Simplified" />
        <Todo title="Finish Interview Section" />
        <Todo title="Land a 100K Job" />
      </div>
      {/* <Modal title="Are you sure you want to delete?"/> */}
    </div>
  );
}

export default App;
