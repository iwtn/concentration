const flipCard = (state, card) => {
  card.side = 'front'
  return card
}

const card = (state = {}, action) => {
  switch (action.type) {
    case 'FLIP':
      const card = action.card
      if (state.isStopFlip === false) {
        flipCard(state, card)
      }
      return state
    default:
      return state
  }
}

export default card
