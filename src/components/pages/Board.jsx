import React from 'react';
import Card from './../Card';
import './Board.css';

export default class Board extends React.Component {
  constructor(props) {
    super(props);

    // We need to bind this to the component due scoping rules
    this.generateGrid = this.generateGrid.bind(this);
    this.generateCards = this.generateCards.bind(this);
  }

  generateGrid(columns, rows) {
    console.log(document.documentElement.style);
    document.documentElement.style.setProperty('--columns', columns);
    document.documentElement.style.setProperty('--rows', rows);
  }

  generateCards(number) {
    let grid = [];
    for (let i = 1; i <= number; i++) {
      grid.push(<Card key={i}/>);
    }
    return grid;
  }

  render() {
    const { level } = this.props;
    let numberOfCards, gridRows, gridColumns;
    switch (level) {
      // Assign 16 images
      case 0:
        numberOfCards = 16;
        gridRows = 4;
        gridColumns = 4;
        break;
      // Assign 32 images
      case 1:
        numberOfCards = 36;
        gridRows = 6;
        gridColumns = 6;
        break;
      // Assign 64 images
      case 2:
        numberOfCards = 64;
        gridRows = 8;
        gridColumns = 8;
        break;
      default:
        // Nothing to do here
        break;
    }

    // Generate the selected number of cards
    return <div className='container'>
      {this.generateGrid(gridRows, gridColumns)}{this.generateCards(numberOfCards)}
    </div>
  }
}
