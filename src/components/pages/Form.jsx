import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Form.css';
import Board from "../Board";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      levelNames: ['Fácil', 'Medio', 'Difícil'],
      level: 0,
      startLevel: false
    };

    this.onSetLevel = this.onSetLevel.bind(this);
    this.startGame = this.startGame.bind(this);
  }

  changeLevel = (event) => {
    switch (event.target.name) {
      case 'Fácil':
        this.setState({ level: 0, startLevel: false });
        break;
      default:
        this.setState({ level: 1, startLevel: false });
        break;
    }
  };

  onSetLevel() {
    this.props.setLevel(this.state.gameLevel);
  }

  startGame() {
    this.setState({ startLevel: true });
  }

  render() {
    const { startLevel, level } = this.state;
    return <div>
      <p>Elige un nivel de dificultad:</p>
      <label>
        <input type="radio" name="Fácil" value="1" checked={level === 0} disabled={startLevel} onChange={this.changeLevel}/>
        {this.state.levelNames[0]}
      </label>
      <label>
        <input type="radio" name="Medio" value="2" checked={level === 1} disabled={startLevel} onChange={this.changeLevel}/>
        {this.state.levelNames[1]}
      </label>
      {/*<label>*/}
      {/*<input type="radio" name="level" value="3"*/}
      {/*onClick={this.props.gameLevel}*/}
      {/*/>*/}
      {/*{this.state.levelNames[2]}*/}
      {/*</label>*/}
      <div>
        <button onClick={this.startGame}>Empezar a jugar</button>
        {startLevel && <Board level={level}/>}
      </div>
    </div>
  }
}
