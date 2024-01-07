import './App.css';
import Todo from './components/Todo.jsx'

function App() {
  return (
    <div>
    <h1>My Todo List</h1>
    <Todo></Todo>
    <div>
      <h2>Finish Frontend Simplified</h2>
      <button>Delete</button>
    </div>
    <div>
      <h2>Finish The Interview Section</h2>
      <button>Delete</button>
    </div>
    <div>
      <h2>Land 100k Job</h2>
      <button>Delete</button>
    </div>
    </div>
  );
}

export default App;
