import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from "axios"

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: ""
    };
  }

  componentDidMount() {
    axios.get("https://pokeapi.co/api/v2/pokemon").then(response => {
      this.setState({
        pokemon: response.data.results[0]
      });
    });
  }

  render() {

    return (
      <div>
        <h1>{this.state.pokemon.name}</h1>
        <h2>{this.state.pokemon.url}</h2>

      </div>
    );
  }
}

export default App;
