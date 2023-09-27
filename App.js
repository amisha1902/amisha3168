// eslint-disable-next-line no-unused-vars
import logo from './logo.svg';
import './App.css';
// eslint-disable-next-line no-unused-vars
import todoList from './todolist'

function App() {
  const todos = [
    {id: 1, text:"task1", done: false},
    {id: 2, text:"task2", done: false},
    {id: 3, text:"task3", done: false}
  ];
  return (
    <div className="App">
      <h1> To Do List</h1>
      <todoList todos={todos}></todoList>
    </div>
  );
}

export default App;
