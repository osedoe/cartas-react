import React, { Component } from 'react';
import './Form.css';
import Board from "./Board";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      levelNames: ['Fácil', 'Medio', 'Difícil'],
      level: 0,
      startLevel: false
    };

    this.onSetLevel = this.onSetLevel.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.startGame = this.startGame.bind(this);
  }

  changeLevel = (event) => {
    switch (event.target.name) {
      case 'Fácil':
        this.setState({ level: 0, startLevel: false });
        break;
      case 'Medio':
        this.setState({ level: 1, startLevel: false });
        break;
      case 'Difícil':
        this.setState({ level: 2, startLevel: false });
        break;
      default:
        this.setState({ level: 1, startLevel: false });
        break;
    }
  };

  onSetLevel() {
    this.props.setLevel(this.state.gameLevel);
  }

  resetGame() {
    window.location.reload();

}

  startGame() {
    this.setState({ startLevel: true });
  }

  render() {
    const { startLevel, level } = this.state;
    return <div className='outterContainer'>
      <div className='formContainer'>
        <p>Elige un nivel de dificultad:</p>
        <div className='inputContainer'>
          <label>
            <input type="radio" name="Fácil" checked={level === 0} disabled={startLevel} onChange={this.changeLevel}/>
            {this.state.levelNames[0]}
          </label>
          <label>
            <input type="radio" name="Medio" checked={level === 1} disabled={startLevel} onChange={this.changeLevel}/>
            {this.state.levelNames[1]}
          </label>
          <label>
            <input type="radio" name="Difícil" checked={level === 2} disabled={startLevel} onChange={this.changeLevel}/>
            {this.state.levelNames[2]}
          </label>
        </div>
        <div className='btnContainer'>
          <button onClick={this.resetGame}>Reiniciar</button>
          <button onClick={this.startGame}>Empezar a jugar</button>
        </div>
      </div>
      {startLevel && <Board level={level}/>}
    </div>
  }
}
