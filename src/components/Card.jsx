import React from 'react';
import './Card.css';
export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sideB: require('./../img/reverso.png'),
      sideA: this.props.frontImg,
      showing: false
    }
    this.flipCard = this.flipCard.bind(this);
  }

  checkPair() {
    this.setState({
      showing: true
    })
  }

  flipCard() {
    this.setState({
      sideA: this.state.sideB,
      sideB: this.props.frontImg,
    })
  }

  render() {
    return <div className='cardContainer'>
      <img className='reverse'
        onClick={this.flipCard}
        src={this.state.sideB}
        alt={this.state.sideA}
      />
    </div>
  }
}
