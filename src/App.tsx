import React from 'react';
import './App.css';
import Timer from './components/Timer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Component Testing!
        </p>
      </header>
      <body className="App-body">
        <Timer />
      </body>
    </div>
  );
}

export default App;
