import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <CreateTodo />
      {/* <TodoList /> */}
    </div>
  );
}

export default App;
