import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Field from './components/Field'

const cards = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CARD':
      return state.concat([action.card])
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

let cnt = 1
const addContinuousCard = () => {
  cnt++
  return () => {
    store.dispatch({
      type: 'ADD_CARD',
      card: {
        num: cnt,
        side: 'back'
      }
    })
  }
}

let deck = [];

['♠', '♣', '♦', '♥'].forEach( (suit) => {
  for (let i=0; i<13; i++) {
    deck.push({
      num: i+1,
      suit: suit,
      side: 'back',
    })
  }
})

let store = createStore(cards, deck)
const rootEl = document.getElementById('root')

class Root extends Component {
  render() {
    return (
      <Field
        cards={store.getState()}
        onCardClick={onFlip}
        addCard={addContinuousCard}
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
