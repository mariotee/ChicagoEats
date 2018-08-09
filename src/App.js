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
          This map is just for show. It only has like 5 places. lol
        </p>
        {
          this.state.data && <Map data={this.state.data}/>
        }
      </div>
    );
  }
}

export default App;
