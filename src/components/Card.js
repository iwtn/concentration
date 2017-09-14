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
          width={w}
          height={h}
          fill={color}
          strokeWidth="3"
          stroke="black"
          rx="10"
          ry="10"
        />
        <text
          x="5"
          y="20"
          fontFamily="Verdana"
          fontSize="20"
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
