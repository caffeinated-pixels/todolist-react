import React, { Component } from 'react'
import NewItemEntry from './NewItemEntry'
import ListContainer from './ListContainer'

export default class App extends Component {
  state = { list: [], toDoItem: '' }

  handleSubmit = event => {
    event.preventDefault() // prevents page reloading on submit
    console.log('stop clicking me!')
    // processSubmission()
  }

  render() {
    return (
      <main>
        <NewItemEntry handleSubmit={this.handleSubmit} />
        <ListContainer />
      </main>
    )
  }
}
