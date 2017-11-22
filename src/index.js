import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import App from './components/App'

import logger from './middleware/logger'
import pair from './middleware/checkPair'

import reducer from './reducers/index'

let store = createStore(
  reducer,
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
