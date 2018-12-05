import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Form.css';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      levelNames: ['Fácil', 'Medio', 'Difícil'],
      level: '0'
    }

    this.onSetLevel = this.onSetLevel.bind(this);
  }

  onSetLevel() {
    this.props.setLevel(this.state.gameLevel);
  }

  render() {
    return <form>
      <p>Elige un nivel de dificultad:</p>
      <label>
        <input type="radio" name="level" value="1" defaultChecked
          onClick={this.gameLevel}
        />
        {this.state.levelNames[0]}
      </label>
      <label>
        <input type="radio" name="level" value="2"
          onClick={this.gameLevel}
        />
        {this.state.levelNames[1]}
      </label>
      <label>
        <input type="radio" name="level" value="3"
          onClick={this.props.gameLevel}
        />
        {this.state.levelNames[2]}
      </label>
      <div>
        <Link to="/game">
          <button>
            Empezar a jugar
          </button>
        </Link>
      </div>
    </form>
  }
}
