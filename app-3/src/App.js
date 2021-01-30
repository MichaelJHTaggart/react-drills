import React, { Component } from 'react';
import './App.css'

class App extends Component {

  constructor() {
    super();

    this.state = {
      userInput: "",
      dataArray: ['One fish', 'two fish', 'red fish', 'blue fish']
    };
  }

  handleChange(filter) {
    this.setState({ userInput: filter });
  }

  render() {
    let suessToDisplay = this.state.dataArray
      .filter((element, index) => {
        return element.includes(this.state.userInput);
      })
      .map((element, index) => {
        return <h2 key={index}>{element}</h2>
      });

    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} type="text" />
        {suessToDisplay}
      </div>
    )
  };
}

export default App