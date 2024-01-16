import "./App.css";
import Todo from "./components/Todo.jsx";
import Title from "./components/Title.jsx";
import Modal from "./components/Modal.jsx";
import Counter from "./components/Counter.jsx";
import React, { useState, useEffect } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  function onTodoDelete() {
    setShowModal(true);
  }

  function confirmModal() {
    setShowModal(false);
  }

  function cancelModal() {
    setShowModal(false);
  }

  useEffect(() => {
    console.log('ONLY on mount')
  }, [])

  useEffect(() => {
    console.log(`on mount and on ${showModal} change`)
  }, [showModal])

  useEffect(() => {
    console.log('EVERY Render')
  },)

  return (
    <div>
      <Title />
      <div>
        <input
          type="text"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
        <button onClick={() => setShowModal(true)}>Add todo</button>
      </div>
      <div className="todo__wrapper">
        <Todo onTodoDelete={onTodoDelete} title="Finish Frontend Simplified" />
        <Todo onTodoDelete={onTodoDelete} title="Finish Interview Section" />
        <Todo onTodoDelete={onTodoDelete} title="Land a 100K Job" />
      </div>
      {showModal && (
        <Modal
          confirmModal={confirmModal}
          cancelModal={cancelModal}
          title="Confirm Delete?"
        />
      )}
    </div>
  );
}

export default App;
