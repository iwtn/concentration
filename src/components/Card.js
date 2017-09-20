import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Card extends Component {
  render() {
    const { side, onFlip, x, y, w, h } = this.props;
    let { num } = this.props;
    let color = '#3dbe3b';
    if (side === 'front') {
      color = '#f1f1f1';
    } else {
      num = ''
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
          fontSize="15"
          fill="black"
        >
          {num}
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
