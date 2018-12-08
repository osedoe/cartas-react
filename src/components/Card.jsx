import React from 'react';
import './Card.css';
export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardId: this.props.cardId,
      sideB: require('./../img/reverso.png'),
      sideA: this.props.frontImg,
      imageUp: false,
      matched: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.flipCard = this.flipCard.bind(this);
  }

  handleClick() {
    this.flipCard();
    this.onSelect();
  }

  onSelect() {
    const { cardId, frontImg } = this.props;
    this.props.selectCard(cardId, frontImg);
  }

  flipCard(event) {
    // Swap images
    this.setState({
      sideA: this.state.sideB,
      sideB: this.props.frontImg,
      imageUp: true
    });
  }

  render() {
    return <div className='cardContainer'>
      <img className='reverse'
        onClick={this.handleClick}
        src={this.state.sideB}
        alt={this.state.sideA}
      />
    </div>
  }
}
