import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Field from './components/Field'

const cards = (state = [], action) => {
  switch (action.type) {
    case 'FLIP':
      let currentSide = state[action.index].side
      state[action.index].side = (currentSide === 'back') ? 'front' : 'back'
      return state
    default:
      return state
  }
}

const onFlip = (i) => {
  return () => {
    store.dispatch({ type: 'FLIP', index: i })
  }
}

let deck = [];
['♠', '♣'].forEach( (suit) => {
  for (let i=0; i<10; i++) {
    deck.push({
      num: i+1,
      suit: suit,
      side: 'back',
      textColor: 'black',
    })
  }

  ['J', 'Q', 'K'].forEach( (n) => {
    deck.push({
      num: n,
      suit: suit,
      side: 'back',
      textColor: 'black',
    })
  })
});

['♦', '♥'].forEach( (suit) => {
  for (let i=0; i<10; i++) {
    deck.push({
      num: i+1,
      suit: suit,
      side: 'back',
      textColor: 'red',
    })
  }

  ['J', 'Q', 'K'].forEach( (n) => {
    deck.push({
      num: n,
      suit: suit,
      side: 'back',
      textColor: 'red',
    })
  })
})

let store = createStore(cards, deck)
const rootEl = document.getElementById('root')

class Root extends Component {
  render() {
    return (
      <Field
        cards={store.getState()}
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
