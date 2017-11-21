import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Card from './Card'
import { flipCard } from '../actions'

class Field extends Component {
  drawCard(i, card, onCardClick) {
    card.w = 50
    card.h = 81

    const { x, y } = this.getPosition(i, 800, 600, card.w, card.h, 10, 10)

    return (
      <Card
        key={i}
        card={card}
        onFlip={onCardClick}
        x={x}
        y={y}
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
    const { cards } = this.props;
    const onCardClick = (card) => {
      return () => {
        dispatch(flipCard(card))
      }
    }

    return (
      <g>
        {cards.map((c, i) => this.drawCard(i, c, onCardClick))}
      </g>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

Field.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      side: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default Field;
