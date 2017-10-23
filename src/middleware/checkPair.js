const getFrontCardNum = (cards) => {
  return cards.filter( (card) => {
    return (card.side === 'front' && card.got === false)
  })
}

const pairCheck = (store, first, second) => {
  return () => {
    if (first.num === second.num) {
      console.log('same!!!')
      first.got = true
      second.got = true
      store.dispatch({ type: 'REFRESH' })
    } else {
      store.dispatch({ type: 'ALL_BACK' })
    }
  }
}

const hogehoge = (frontCards, store, action) => {
  switch (frontCards.length) {
    case 2:
      setTimeout(pairCheck(store, frontCards[0], frontCards[1]), 1000)
      break;
    default:
      break;
  }
}

const pair = store => next => action => {
  let result = next(action)
  let state = store.getState()

  switch (action.type) {
    case 'FLIP':
      const frontCards = getFrontCardNum(state.cards)
      hogehoge(frontCards, store, action)
      break
    default:
      break
  }
  return result
}

export default pair
