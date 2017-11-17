const countGotCards = (cards, playerName) => {
  return cards.filter( (card) => {
    return (card.got && card.gotBy === playerName)
  }).length
}

const counter = (state = {}, action) => {
  switch (action.type) {
    case 'COUNT':
      state.users.forEach( (user) => {
        user.gotCount = countGotCards(state.cards, user.name)
      })
      return state
    default:
      return state
  }
}

export default counter
