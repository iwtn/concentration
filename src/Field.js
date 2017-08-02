import React, { Component } from 'react';
import Card from './Card.js';

class Field extends Component {
  render() {
    return (
      <svg width="1024" height="768">
        <rect x="0" y="0" width="800" height="600" fill="none" stroke="blue" strokeWidth="1" />
        <Card />
      </svg>
    );
  }
}

export default Field;
