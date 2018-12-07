import React from 'react';

export default class Card extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    src: require('./../img/reverso.png')
  }
}

  render() {
    return <div>
      <img src={this.state.src} alt='imagen de una carta' />
    </div>
  }
}
