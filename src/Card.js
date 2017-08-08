import React, { Component } from 'react';

class Card extends Component {
  render() {
    let color = (this.props.side === 'front') ? 'red' : 'blue';
    return (
      <rect x={this.props.x} y={this.props.y} width="100" height="162" fill={color}  strokeWidth="0" />
    );
  }
}

export default Card;
