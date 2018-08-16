import React, { Component } from 'react';
import './App.css';
import {HOST} from 'constants/network.js';
import Map from 'components/EatsMap';
import Loading from 'mt-material-stuff/components/CloudLoading';

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
          This app is still in the brainstorming step of the process
        </p>
        <br/>
        {
          this.state.data[0]
            ? <Map data={this.state.data}/>
            : <Loading/>
        }
      </div>
    );
  }
}

export default App;
