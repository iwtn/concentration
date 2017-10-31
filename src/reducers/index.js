const flipCard = (state, card) => {
  card.side = 'front'
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

const countGotCards = (cards, playerName) => {
  return cards.filter( (card) => {
    return (card.got && card.gotBy === playerName)
  }).length
}

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'FLIP':
      const card = action.card
      if (state.isStopFlip === false) {
        flipCard(state, card)
      }
      return state
    case 'ALL_BACK':
      state.cards = allBack(state.cards)
      if (state.currentUser === 'A') {
        state.currentUser =  'B'
      } else {
        state.currentUser =  'A'
      }
      return state
    case 'COUNT':
      state.users.forEach( (user) => {
        user.gotCount = countGotCards(state.cards, user.name)
      })
      return state
    default:
      return state
  }
}

export default reducer
