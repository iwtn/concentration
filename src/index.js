import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Card from './components/Card'
import card from './reducers'

const store = createStore(card)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <Card
    side={store.getState()}
    onFlip={() => store.dispatch({ type: 'FLIP' })}
  />,
  rootEl
)

render()
store.subscribe(render)
