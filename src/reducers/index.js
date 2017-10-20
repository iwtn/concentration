const flipCard = (state, card) => {
  let currentSide = card.side
  if (currentSide === 'back') {
    card.side = 'front'
  } else {
    card.side = 'back'
  }
  return card
}

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'FLIP':
      const card = action.card
      if (card.got === false) {
        flipCard(state, card)
      }
      return state
    case 'REFRESH':
      return state
    default:
      return state
  }
}

export default reducer
