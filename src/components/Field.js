import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Card from './Card'

class Field extends Component {
  render() {
    const { cards, onCardClick, addCard } = this.props;

    return (
      <g>
        {cards.map((c, i) =>
          <Card
            key={i}
            side={c.side}
            text={c.text}
            onFlip={onCardClick(i)}
            x={150 * i}
            y="0"
          />,
        )}
        <circle
          cx="50"
          cy="300"
          r="50"
          onClick={addCard()}
        />
      </g>
    )
  }
}

Field.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      side: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onCardClick: PropTypes.func.isRequired
}

export default Field;
