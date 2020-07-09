import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import TodoItem from './Pages/About';
import TodoList from './Pages/TodoList';
// import './../node_modules/bootstrap/cs/'
// eslint-disable-next-line no-unused-expressions

function App() {
  return (

    <div className="App">
      <header>
        <ul>
          <li> Logon</li>
          <li> New request</li>
          <li> About</li>
        </ul>
        <TodoList />

      </header>
    </div >
  );
}

export default App;
