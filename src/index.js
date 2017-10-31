import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import Field from './components/Field'
import UserState from './components/User'
import ResetButton from './components/ResetButton'
import logger from './middleware/logger'
import pair from './middleware/checkPair'
import reducer from './reducers/index'

const makeCard = (num, suit, color) => {
  return {
    num: num,
    suit: suit,
    side: 'back',
    textColor: color,
    got: false,
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

const initialState = () => {
  return {
    cards: deck,
    users: [
      { name: 'A', gotCount: 0 },
      { name: 'B', gotCount: 0 },
    ],
    currentUser: 'A',
  }
}

let store = createStore(
  reducer,
  initialState(),
  applyMiddleware(logger, pair)
)

const onFlip = (card) => {
  return () => {
    store.dispatch({ type: 'FLIP', card: card })
  }
}


const rootEl = document.getElementById('root')

const Root = (props) => (
  <g>
    <Field
      cards={store.getState().cards}
      onCardClick={onFlip}
    />
    <UserState
      currentUser={store.getState().currentUser}
      users={store.getState().users}
    />
    <ResetButton />
  </g>
)

const render = () => ReactDOM.render(
  <Root />,
  rootEl
)

render()
store.subscribe(render)
