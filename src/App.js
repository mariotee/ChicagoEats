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
          This is just a map of good restaurants in my hometown of Chicago that I have been to.  I have a hard time coming up with recommendations for people, so this is used to quickly pull up places to recommend to anyone that asks me.
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