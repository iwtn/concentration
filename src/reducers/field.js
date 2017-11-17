const allBack = (cards) => {
  const backedCards = cards.map( (card) => {
    if (card.got === false) {
      card.side = 'back'
    }
    return card
  })
  return backedCards
}

const field = (state = {}, action) => {
  switch (action.type) {
    case 'ALL_BACK':
      state.cards = allBack(state.cards)
      if (state.currentUser === 'A') {
        state.currentUser =  'B'
      } else {
        state.currentUser =  'A'
      }
      return state
    default:
      return state
  }
}

export default field
