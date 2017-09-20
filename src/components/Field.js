import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Card from './Card'

class Field extends Component {
  drawCard(i, card, onCardClick) {
    const w = 50
    const h = 81

    const { x, y } = this.getPosition(i, 800, 600, w, h, 10, 10)

    return (
      <Card
        key={i}
        side={card.side}
        num={card.suit + card.num}
        onFlip={onCardClick(i)}
        x={x}
        y={y}
        w={w}
        h={h}
      />
    )
  }

  getPosition(i, fw, fh, cw, ch, pw, ph) {
    const ax = cw + pw
    const ay = ch + ph
    const col = Math.floor(fw / ax)

    const xp = i % col
    const yp = Math.floor(i / col)

    return {
      x: xp * ax,
      y: yp * ay,
    }
  }

  render() {
    const { cards, onCardClick, addCard } = this.props;

    return (
      <g>
        <g>
          {cards.map((c, i) => this.drawCard(i, c, onCardClick))}
        </g>
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
