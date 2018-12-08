import React from 'react';
import Card from './../Card';
// Import custom library to get random numbers and shuffle
import 'extend-random';
import loadImages from './../../img/imagenes';
import './Board.css';
import { getNumber, shuffleArr } from 'extend-random';

export default class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstMatch: '',
      secondMatch: '',
      isComparing: false,
      attemps: 0,
    }
    // We need to bind this to the component due scoping rules
    this.selectingCard = this.selectingCard.bind(this);
    this.generateGrid = this.generateGrid.bind(this);
    this.generateCards = this.generateCards.bind(this);
  }

  selectingCard(cardId, frontImg) {
    const { firstMatch, secondMatch } = this.state;
    if (firstMatch === '') {
      this.setState({ firstMatch: frontImg });
    }
    if (firstMatch !== '' && secondMatch === '') {
      this.setState({ secondMatch: frontImg });
    }
    // Implement comparison
  }

  generateGrid(columns, rows) {
    // Set the variables for the CSS Grid
    document.documentElement.style.setProperty('--columns', columns);
    document.documentElement.style.setProperty('--rows', rows);
  }

  generateCards(number) {
    // Create an empty grid
    let grid = [];
    // Load the images into an array
    let images = loadImages();
    // Start looping to insert into the grid
    for (let i = 1; i <= number; i=i+2) {
      const randomImgIndex = getNumber(0, images.length);
      const imgPath = `/${images[randomImgIndex]}`;
      // Create two cards at a time
      grid.push(<Card
        selectCard={this.selectingCard}
        key={i}
        cardId={i}
        frontImg={imgPath}
      />);

      grid.push(<Card
        selectCard={this.selectingCard}
        key={i + 1}
        cardId={i + 1}
        frontImg={imgPath}
      />);
    }
    return shuffleArr(grid);
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
    return <div>
      <div className='boardContainer'>
        {this.generateGrid(gridRows, gridColumns)}
        {this.generateCards(numberOfCards)}
      </div>
    </div>

  }
}
