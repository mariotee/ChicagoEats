import React, { Component } from 'react';
import './App.css';
import Map from './components/EatsMap';
import {HOST} from './constants/network.js';

class App extends Component {
  state = {
    data: [],
  }

  async componentDidMount() {
    const response = await fetch(HOST + '/api/places');
    const json = await response.json();

    this.setState({
      data: json,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Chicago Eats</h1>
        </header>
        <p className="App-intro">
          This app is still in the brainstorming step of the process;<br/>
          NOTE: The map might take like 5-8 seconds to load because
          I use a free cloud service since I am poor. lol
        </p>
        {
          this.state.data
            ? <Map data={this.state.data}/>
            : "Loading..."
        }
      </div>
    );
  }
}

export default App;
