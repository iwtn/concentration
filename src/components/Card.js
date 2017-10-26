import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Card extends Component {
  render() {
    const { card, onFlip, x, y } = this.props;
    let txt = card.suit + card.num
    let color = '#3dbe3b';
    if (card.side === 'front') {
      color = '#f1f1f1'
      if (card.got) {
        if (card.gotBy === 'A') {
          color = '#ffcccc'
        } else {
          color = '#ccccff'
        }
      }
    } else {
      txt = ''
    }
    let transform = "translate(" + x + "," + y + ")";

    return (
      <g
        transform={transform}
      >
        <rect
          onClick={onFlip}
          width={card.w}
          height={card.h}
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
          fill={card.textColor}
        >
          {txt}
        </text>
      </g>
    )
  }
}

Card.propTypes = {
  card: PropTypes.object.isRequired,
  onFlip: PropTypes.func.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
}

export default Card;
