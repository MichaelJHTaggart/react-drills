import React from 'react';
import logo from './logo.svg';
import './App.css';
import router from "./router"
import { Link } from "react-router-dom"

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
      </nav>
    </div>
  );
}

export default App;
