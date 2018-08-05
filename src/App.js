import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './components/EatsMap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Chicago Eats</h1>
        </header>
        <p className="App-intro">
          This app is still in the brainstorming step of the process;
          This map is just for show. It only has like 5 places. lol
        </p>
        <Map 
          data={[
          {
            name: 'Jeni\'s Splendid Ice Creams',
            address: '1505 N Milwaukee Ave',
            latitude: 41.918053,
            longitude: -87.688491,
          },
          {
            name: 'Italian Village',
            address: '71 W Monroe St',
            latitude: 41.880634,
            longitude: -87.630159,
          },
          {
            name: 'Calumet Fisheries',
            address: '3259 E 95th St',
            latitude: 41.722633,
            longitude: -87.543981,
          },
          {
            name: 'Jim\'s Original',
            address: '5034, 1250 S Union Ave',
            latitude: 41.865825,
            longitude: -87.645191,
          },
          {
            name: 'Legend Tasty House',
            address: '2242 S Wentworth Ave',
            latitude: 41.851612,
            longitude: -87.632263,
          },
        ]}
          clickMarker={()=>{}}
        />
      </div>
    );
  }
}

export default App;
