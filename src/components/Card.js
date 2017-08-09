import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { side, onFlip } = this.props;
    let color = 'blue';
    let text = '';
    if (side === 'front') {
      color = 'red';
      text = '1';
    }
    return (
      <g
        x={this.props.x}
        y={this.props.y}
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
          y="50"
          font-family="Verdana"
          font-size="35"
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
