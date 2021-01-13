import React, { Component } from 'react'
import NewItemEntry from './NewItemEntry'
import ListContainer from './ListContainer'

export default class App extends Component {
  state = { toDoList: [], toDoItem: '', confirmation: '', idTally: 0 }

  componentDidMount() {
    // get toDoList from localStorage & update state
    const storedList = localStorage.getItem('myToDoList')
    if (typeof storedList !== 'string') return // should be a string
    const parsedList = JSON.parse(storedList) // convert back to JSON
    this.setState({ toDoList: parsedList, toDoItem: '' })
  }

  componentDidUpdate(prevProps, prevState) {
    // update localStorage on changes to state
    if (prevState.toDoList !== this.state.toDoList) {
      console.log(this.state.toDoList)
      this.setFocusOnItemEntry()
      this.updatePersistentData()
    }
  }

  handleTextInput = event => {
    this.setState(prevState => ({ ...prevState, toDoItem: event.target.value }))
  }

  handleSubmit = event => {
    event.preventDefault() // prevents page reloading on submit
    this.processSubmission()
  }

  processSubmission = () => {
    // add input text to state.toDoItem & clear input box
    const newEntryText = this.state.toDoItem.trim() // trim whitespace
    if (!newEntryText.length) return // stops if length < 1
    this.setState(prevState => ({
      toDoList: [
        ...prevState.toDoList,
        { id: prevState.idTally, check: false, toDoItem: newEntryText }
      ],
      toDoItem: '',
      confirmation: `${newEntryText} added.`,
      idTally: prevState.idTally + 1
    }))
  }

  handleClear = () => {
    const { toDoList } = this.state
    // check if list contains any items before clearing
    if (toDoList.length) {
      const confirmed = window.confirm(
        'Are you sure you want to delete the entire list?'
      )
      if (confirmed) {
        this.setState(prevState => ({ ...prevState, toDoList: [] }))
      }
    }
  }

  handleCheck = event => {
    const id = Number(event.target.id) // convert string to number
    const index = this.state.toDoList.findIndex(x => x.id === id)
    const removedText = this.state.toDoList[index].toDoItem
    // updated check property for toDoItem in state
    this.setState(prevState => {
      const updatedList = [...prevState.toDoList]
      updatedList[index].check = !updatedList[index].check
      return {
        ...prevState,
        toDoList: updatedList,
        confirmation: `${removedText} removed.`
      }
    })

    // setTimeout(() => {
    //   this.setState(prevState => {
    //     const newList = prevState.toDoList.filter((item, i) => index !== i)
    //     return { ...prevState, toDoList: [...newList] }
    //   })
    // }, 500)
  }

  removeItem = index => {
    setTimeout(() => {
      this.setState(prevState => {
        const newList = prevState.toDoList.filter((item, i) => index !== i)
        return { ...prevState, toDoList: [...newList] }
      })
    }, 500)
  }

  setFocusOnItemEntry = () => {
    // sets focus back to input on rerender
    document.getElementById('newItem').focus()
  }

  updatePersistentData = () => {
    localStorage.setItem('myToDoList', JSON.stringify(this.state.toDoList))
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
          handleCheck={this.handleCheck}
          confirmation={this.state.confirmation}
        />
      </main>
    )
  }
}
