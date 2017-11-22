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

const field = (state = initialState, action) => {
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
