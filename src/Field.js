import React, { Component } from 'react';
import Card from './Card.js';

class Field extends Component {
  drawCards() {
    return (
      <g>
        <Card x="100" y="200" />
        <Card x="300" y="200" />
        <Card x="100" y="400" />
        <Card x="300" y="400" />
      </g>
    );
  }

  render() {
    return (
      <svg width="1024" height="768">
        <rect x="0" y="0" width="800" height="600" fill="none" stroke="blue" strokeWidth="1" />
        {this.drawCards()}
      </svg>
    );
  }
}

export default Field;
