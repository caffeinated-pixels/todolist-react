import React, { Component } from 'react'
import NewItemEntry from './NewItemEntry'
import ListContainer from './ListContainer'

export default class App extends Component {
  state = { list: [], toDoItem: '' }

  componentDidMount() {
    // TODO: get persistent date from local storage API
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.list !== this.state.list) console.log(this.state.list)
  }

  handleTextInput = event => {
    this.setState(prevState => ({ ...prevState, toDoItem: event.target.value }))
  }

  handleSubmit = event => {
    event.preventDefault() // prevents page reloading on submit
    this.processSubmission()
  }

  processSubmission = () => {
    const newEntryText = this.state.toDoItem
    if (!newEntryText.length) return
    console.log('stop clicking me!')
    console.log(`Input = ${newEntryText}`)
    this.setState(prevState => ({
      list: [...prevState.list, newEntryText],
      toDoItem: ''
    }))
  }

  render() {
    return (
      <main>
        <NewItemEntry
          handleTextInput={this.handleTextInput}
          handleSubmit={this.handleSubmit}
          value={this.state.toDoItem}
        />
        <ListContainer />
      </main>
    )
  }
}
