import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <Link to="">Home</Link>
          <Link to="/signup">Signup</Link>
          <Link to="details">Details</Link>
        </ul>
        {router}
    </div>
  );
}

export default App;
