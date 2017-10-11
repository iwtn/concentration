import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Field from './components/Field'

const makeCard = (num, suit, color) => {
  return {
    num: num,
    suit: suit,
    side: 'back',
    textColor: color,
  }
}

let deck = [];
[
  {suit: '♠', color: 'black'},
  {suit: '♣', color: 'black'},
  {suit: '♠', color: 'red'},
  {suit: '♣', color: 'red'},
].forEach( (d) => {
  for (let i=0; i<10; i++) {
    deck.push(makeCard(i+1, d.suit, d.color))
  }
  ['J', 'Q', 'K'].forEach( (n) => {
    deck.push(makeCard(n, d.suit, d.color))
  })
});
deck.sort(() => (Math.random() - 0.5));

const initialState = {
  cards: deck,
  users: ['A', 'B'],
  frontCardIndex: null,
}

const checkPair = (state, firstCardIndex, secondCardIndex) => {
  return () => {
    const firstCard = state.cards[firstCardIndex]
    const secondCard = state.cards[secondCardIndex]
    if (firstCard.num == secondCard.num) {
      console.log('same!!!')
    } else {
      store.dispatch({ type: 'FLIP', index: firstCardIndex })
      store.dispatch({ type: 'FLIP', index: secondCardIndex })
    }
    state.frontCardIndex = null
  }
}

const flipCard = (state, index) => {
  let card = state.cards[index]
  let currentSide = card.side
  if (currentSide === 'back') {
    card.side = 'front'
    if (state.frontCardIndex != null) {
      setTimeout(checkPair(state, index, state.frontCardIndex), 1000)
    } else {
      state.frontCardIndex = index
    }
  } else {
    card.side = 'back'
  }
  return card
}

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'FLIP':
      state.cards[action.index] = flipCard(state, action.index)
      return state
    default:
      return state
  }
}

let store = createStore(reducer, initialState)

const onFlip = (i) => {
  return () => {
    store.dispatch({ type: 'FLIP', index: i })
  }
}


const rootEl = document.getElementById('root')

class Root extends Component {
  render() {
    return (
      <Field
        cards={store.getState().cards}
        onCardClick={onFlip}
      />
    )
  }
}

const render = () => ReactDOM.render(
  <Root />,
  rootEl
)

render()
store.subscribe(render)
