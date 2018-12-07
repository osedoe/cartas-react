import React from 'react';
import Card from './../Card';
export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.generateCards = this.generateCards.bind(this);
  }


  generateCards(number) {
    console.log('gg');
    while (number > 0) {
      this.innerHTML += '<Card />';
      number--;
    }
  }

  render() {
    const { level } = this.props;
    switch (level) {
      case 0:
        // Create 16 images
        return <div className='container'>
          <Card />
        </div>
      // Create 32 images
      case 1:
        return <div className='container'>
          <Card/>
        </div>
      // Create 64 images
      case 2:
        return <div className='container'>
          <Card/>
        </div>
      default:
        break;
    }
  }
}
