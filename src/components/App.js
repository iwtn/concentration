import React, { Component } from 'react'

import Field from './Field'
import UserState from './User'
import ResetButton from './ResetButton'

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
