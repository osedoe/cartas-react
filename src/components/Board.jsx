import React from 'react';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { level } = this.props;
    if (level === 0) {
      return <div className='container'>
        <Card/>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>;
    }
    return <div className='container'>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>5</div>
      <div>5</div>
      <div>5</div>
      <div>5</div>
      <div>5</div>
      <div>5</div>
      <div>5</div>
      <div>5</div>
      <div>5</div>
      <div>5</div>
    </div>
  }
}
