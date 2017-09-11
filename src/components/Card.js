import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Card extends Component {
  render() {
    const { side, onFlip, x, y, w, h } = this.props;
    let { text } = this.props;
    let color = 'blue';
    if (side === 'front') {
      color = 'red';
    } else {
      text = ''
    }
    let transform = "translate(" + x + "," + y + ")";
    return (
      <g
        transform={transform}
      >
        <rect
          onClick={onFlip}
          width="100"
          height="162"
          fill={color}
          strokeWidth="0"
        />
        <text
          x="10"
          y="35"
          fontFamily="Verdana"
          fontSize="35"
          fill="black"
        >
          {text}
        </text>
      </g>
    )
  }
}

Card.propTypes = {
  side: PropTypes.string.isRequired,
  onFlip: PropTypes.func.isRequired
}

export default Card;
