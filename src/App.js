import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Form from './components/pages/Form';
import Game from './components/pages/Game';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameLevel: '0'
    }

    this.setLevel = this.setLevel.bind(this);
  }

  setLevel(level) {
    console.log("hola");
    this.setState({
      gameLevel: level
    });
  }

  render() {
    return <Router>
        <div className="app">
          <Header />
          <Route exact path="/" component={Form} gameLevel={this.state.gameLevel}/>
          <Route path="/form" component={Form} gameLevel={this.state.gameLevel} />
          <Route path="/game" component={Game} />
        </div>
    </Router>
  }
}
