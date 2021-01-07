import React, { Component } from 'react'
import NewItemEntry from './NewItemEntry'
import ListContainer from './ListContainer'

class App extends Component {
  render() {
    return (
      <div>
        <NewItemEntry />
        <ListContainer />
      </div>
    )
  }
}

export default App
