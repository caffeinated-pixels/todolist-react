import React, { Component } from 'react'
import NewItemEntry from './NewItemEntry'
import ListContainer from './ListContainer'

export default class App extends Component {
  state = { list: [], toDoItem: '' }

  render() {
    return (
      <main>
        <NewItemEntry />
        <ListContainer />
      </main>
    )
  }
}
