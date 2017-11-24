import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Card from './Card'
import { flipCard } from '../actions'

const drawCard = (i, card, onCardClick) => {
  card.w = 50
  card.h = 81

  const { x, y } = getPosition(i, 800, 600, card.w, card.h, 10, 10)

  return (
    <Card
      key={i}
      card={card}
      onFlip={() => onCardClick(card)}
      x={x}
      y={y}
    />
  )
}

const getPosition = (i, fw, fh, cw, ch, pw, ph) => {
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

const Field = ({cards, onCardClick }) => (
  <g>
    {cards.map((c, i) => drawCard(i, c, onCardClick))}
  </g>
)

Field.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      side: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
}


const mapStateToProps = state => {
  return {
    cards: state.field.cards
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCardClick: card => {
      dispatch(flipCard(card))
    }
  }
}

const FieldWithCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Field)

export default FieldWithCard
