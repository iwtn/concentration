import makeDeck from './../makeDeck'

const initialState = {
  cards: makeDeck(),
  users: [
    { name: 'A', gotCount: 0 },
    { name: 'B', gotCount: 0 },
  ],
  currentUser: 'A',
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

const flipCard = (cards, card) => {
  const flippedCards = cards.map( (c) => {
    if (card === c) {
      c.side = 'front'
    }
    return c
  })
  return flippedCards
}

const field = (state = initialState, action) => {
  const card = action.card
  switch (action.type) {
    case 'ALL_BACK':
      state.cards = allBack(state.cards)
      if (state.currentUser === 'A') {
        state.currentUser =  'B'
      } else {
        state.currentUser =  'A'
      }
      return state
    case 'FLIP':
      if (state.isStopFlip === false) {
        state.cards = flipCard(state.cards, card)
      }
      return state
    default:
      return state
  }
}

export default field
