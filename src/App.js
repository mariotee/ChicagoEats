import React, { Component } from 'react';
import './App.css';
import Map from 'components/EatsMap';

class App extends Component {
  state = {
    data: [],
  }

  async componentDidMount() {
    const response = await fetch('https://agt870qjq5.execute-api.us-east-2.amazonaws.com/api');
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
          This app is still in the brainstorming step of the process. Right now, the map just shows
          places where I have gone to eat in Chicago and their addresses.
        </p>
        <br/>
        {
          this.state.data.length
            ? <Map data={this.state.data}/>
            : 'Loading...'
        }
      </div>
    );
  }
}

export default App;