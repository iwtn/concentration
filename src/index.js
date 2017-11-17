import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, bindActionCreators } from 'redux'
import { Provider, connect } from 'react-redux'

import App from './components/App'

import logger from './middleware/logger'
import pair from './middleware/checkPair'

import * as actions from './actions'
import reducer from './reducers/index'

import makeDeck from './makeDeck'

const initialState = () => {
  return {
    cards: makeDeck(),
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


const render = () => ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

render()
store.subscribe(render)
