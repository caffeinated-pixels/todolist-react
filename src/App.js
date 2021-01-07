import React, { Component } from 'react'
import NewItemEntry from './NewItemEntry'
import ListContainer from './ListContainer'

class App extends Component {
  render() {
    return (
      <main>
        <NewItemEntry />
        <ListContainer />
      </main>
    )
  }
}

export default App
