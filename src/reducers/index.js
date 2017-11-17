import { combineReducers } from 'redux'
import card from './card'
import field from './field'
import counter from './counter'

const App = combineReducers({
  card,
  field,
  counter
})

export default App
