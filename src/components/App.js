import React, { Component } from 'react'

import Field from './components/Field'
import UserState from './components/User'
import ResetButton from './components/ResetButton'

class App extends Component {
  render() {
    return (
      <g>
        <Field />
        <UserState />
        <ResetButton />
      </g>
    )
  }
}

export default App
