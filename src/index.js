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
