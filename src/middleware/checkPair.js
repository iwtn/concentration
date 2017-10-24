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

const afterFlip = (frontCards, store) => {
  switch (frontCards.length) {
    case 2:
      setTimeout(pairCheck(store, frontCards[0], frontCards[1]), 1000)
      break;
    default:
      break;
  }
}

const pair = store => next => action => {
  let state = store.getState()
  const beforeFrontCards = getFrontCardNum(state.cards)
  state.isStopFlip = (beforeFrontCards.length >= 2)

  let result = next(action)

  const afterFrontCards = getFrontCardNum(state.cards)
  switch (action.type) {
    case 'FLIP':
      if (state.isStopFlip === false) {
        afterFlip(afterFrontCards, store)
      }
      break
    default:
      break
  }
  return result
}

export default pair
