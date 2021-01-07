import React, { Component } from 'react'
import NewItemEntry from './NewItemEntry'
import ListContainer from './ListContainer'

export default class App extends Component {
  state = { list: [], toDoItem: '' }

  componentDidMount = () => {
    console.log('I mounted (your mum)!')
    // TODO: add event listeners
    const itemEntryForm = document.getElementById('itemEntryForm')
    itemEntryForm.addEventListener('submit', this.handleSubmit)
  }

  componentWillUnmount = () => {
    // TODO: clean-up/remove event listeners
    const itemEntryForm = document.getElementById('itemEntryForm')
    itemEntryForm.removeEventListener('submit', this.handleSubmit)
  }

  handleSubmit = event => {
    event.preventDefault() // prevents page reloading on submit
    console.log('stop clicking me!')
    // processSubmission()
  }

  render() {
    return (
      <main>
        <NewItemEntry />
        <ListContainer />
      </main>
    )
  }
}
