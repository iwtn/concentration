import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { side, onFlip } = this.props;
    const color = (side === 'front') ? 'red' : 'blue';
    return (
      <rect
        onClick={onFlip}
        x={this.props.x}
        y={this.props.y}
        width="100"
        height="162"
        fill={color}
        strokeWidth="0"
      />
    )
  }
}

Card.propTypes = {
  side: PropTypes.string.isRequired,
  onFlip: PropTypes.func.isRequired
}

export default Card;
