import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Card from './components/Card'

function cards(state = [], action) {
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

let store = createStore(cards, [{text: 1, side: 'back'}])
const rootEl = document.getElementById('root')

class Root extends Component {
  render() {
    return (
      <g>
        {store.getState().map((c, i) =>
          <Card
            key={i}
            side={c.side}
            text={c.text}
            onFlip={() => store.dispatch({ type: 'FLIP', index: i })}
            x={150 * i}
            y="0"
          />,
        )}
        <circle cx="50" cy="300" r="50"
          onClick={() => store.dispatch({
            type: 'ADD_CARD',
            card: {
              text: 2,
              side: 'back'
            }
          })}
        />
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
