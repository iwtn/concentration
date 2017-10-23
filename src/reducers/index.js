const flipCard = (state, card) => {
  let currentSide = card.side
  if (currentSide === 'back') {
    card.side = 'front'
  } else {
    card.side = 'back'
  }
  return card
}

const allBack = (cards) => {
  const backedCards = cards.map( (card) => {
    if (card.got === false) {
      card.side = 'back'
    }
    return card
  })
  return backedCards
}

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'FLIP':
      const card = action.card
      if (card.got === false) {
        flipCard(state, card)
      }
      return state
    case 'ALL_BACK':
      state.cards = allBack(state.cards)
      return state
    case 'REFRESH':
      return state
    default:
      return state
  }
}

export default reducer
