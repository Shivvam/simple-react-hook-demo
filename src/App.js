import React from 'react';
import Table from './components/table';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <p>
          Simple react hook app
        </p>
      </header>
      <article>
        Add/Delete number of rows
        <Table/>
      </article>
      <footer>
      <hr/>
      This simple logic to demonstrate the power of react hooks, making a functional conponent a 'stateful component' with the help of 'useState'.
      </footer>

    </div>
  );
}

export default App;
