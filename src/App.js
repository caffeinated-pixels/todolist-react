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
    console.log('stop clicking me!')
    console.log(`Input = ${newEntryText}`)

    // update toDoList, clear toDoItem
    this.setState(prevState => ({
      toDoList: [...prevState.toDoList, newEntryText],
      toDoItem: ''
    }))

    // this.buildListItem()
  }

  // buildListItem = () => {
  //   console.log('buildListItem')
  //   const toDoItems = this.state.list.map((toDoItem, i) => {
  //     return (
  //       <div className="item">
  //         <input
  //           type="checkbox"
  //           key={i}
  //           id={i}
  //           tabIndex="0"
  //           className="checkbox"
  //         />
  //         <label htmlFor={'i'}>{toDoItem}</label>
  //       </div>
  //     )
  //   })
  // }

  render() {
    return (
      <main>
        <NewItemEntry
          handleTextInput={this.handleTextInput}
          handleSubmit={this.handleSubmit}
          value={this.state.toDoItem}
        />
        <ListContainer toDoList={this.state.toDoList} />
      </main>
    )
  }
}
