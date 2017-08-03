import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <rect x={this.props.x} y={this.props.y} width="100" height="162" fill="red"  strokeWidth="0" />
    );
  }
}

export default Card;
