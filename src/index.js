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
  users: ['A', 'B']
}

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'FLIP':
      let currentSide = state.cards[action.index].side
      if (currentSide === 'back') {
        state.cards[action.index].side = 'front'
        setTimeout(() => {
          store.dispatch({ type: 'FLIP', index: action.index })
        }, 1000)
      } else {
        state.cards[action.index].side = 'back'
      }
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
