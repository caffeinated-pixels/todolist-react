import React, { Component } from 'react'
import NewItemEntry from './NewItemEntry'
import ListContainer from './ListContainer'

export default class App extends Component {
  state = { toDoList: [], toDoItem: '' }

  componentDidMount() {
    // TODO: get persistent date from local storage API
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log toDoList on updating
    if (prevState.toDoList !== this.state.toDoList)
      console.log(this.state.toDoList)
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
    // console.log('stop clicking me!')
    // console.log(`Input = ${newEntryText}`)

    // update toDoList, clear toDoItem
    this.setState(prevState => ({
      toDoList: [...prevState.toDoList, newEntryText],
      toDoItem: ''
    }))

    // TODO: update persistent data
  }

  handleClear = () => {
    const { toDoList } = this.state
    if (toDoList.length) {
      const confirmed = window.confirm(
        'Are you sure you want to delete the entire list?'
      )
      if (confirmed) {
        this.setState(prevState => ({ ...prevState, toDoList: [] }))
      }
    }

    // TODO: update persistent data
  }

  render() {
    return (
      <main>
        <NewItemEntry
          handleTextInput={this.handleTextInput}
          handleSubmit={this.handleSubmit}
          value={this.state.toDoItem}
        />
        <ListContainer
          toDoList={this.state.toDoList}
          handleClear={this.handleClear}
        />
      </main>
    )
  }
}
