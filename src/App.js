import React, { Component } from 'react'
import './App.css'
import Map from 'components/EatsMap'
import PLACES from './places.json'

class App extends Component {
  async componentDidMount() {
    // DEPRECATED
    // const HOST = process.env.NODE_ENV == 'production'
    //   ? process.env.REACT_APP_FETCH_HOST
    //   : 'localhost:5000'
    // let response = await fetch(HOST)
    // let json = await response.json()
    
    // this.setState({
    //   data: json,
    // });
  }

  render() {
    return <div className="App">
      <header className="App-header">
        <h1 className="App-title">Chicago Eats</h1>
      </header>
      <p className="App-intro">
        This is just a map of good restaurants in my hometown of Chicago that I have been to.  I have a hard time coming up with recommendations for people, so this is used to quickly pull up places to recommend to anyone that asks me.
      </p>
      <br/>
      <Map data={PLACES}/>
    </div>
  }
}

export default App