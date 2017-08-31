import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Card from './components/Card'
import card from './reducers'

const store = createStore(card)
const rootEl = document.getElementById('root')

class Root extends Component {
  render() {
    return (
      <g>
        <Card
          side={store.getState()}
          onFlip={() => store.dispatch({ type: 'FLIP' })}
          x="150"
          y="0"
        />,
        <Card
          side={store.getState()}
          onFlip={() => store.dispatch({ type: 'FLIP' })}
          x="0"
          y="0"
        />,
      </g>
    )
  }
}

const render = () => ReactDOM.render(
  <Root />,
  rootEl
)

render()
store.subscribe(render)
