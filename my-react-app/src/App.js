// import logo from './logo.svg';
// import './App.css';
// import './TodoApp';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
// import "./App.css"; // or any other CSS file you may have
import TodoApp from "./TodoApp";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Todo App</h1>
      </header>
      <main>
        <TodoApp />
      </main>
    </div>
  );
}

export default App;
