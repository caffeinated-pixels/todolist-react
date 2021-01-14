import React, { Component } from 'react'
import NewItemEntry from './NewItemEntry'
import ListContainer from './ListContainer'
import Footer from './Footer'

export default class App extends Component {
  state = { toDoList: [], toDoItem: '', confirmation: '', idTally: 0 }

  componentDidMount() {
    // get toDoList from localStorage & update state
    const storedState = localStorage.getItem('myToDoList')
    if (typeof storedState !== 'string') return // should be a string
    const parsedState = JSON.parse(storedState) // convert back to JSON

    this.setState({
      toDoList: parsedState.toDoList,
      idTally: parsedState.idTally
    })
  }

  componentDidUpdate(prevProps, prevState) {
    // update localStorage on changes to state
    if (prevState.toDoList !== this.state.toDoList) {
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
        this.setState(prevState => ({ ...prevState, toDoList: [], idTally: 0 }))
      }
    }
  }

  handleClearChecked = () => {
    this.setState(prevState => {
      const filteredList = prevState.toDoList.filter(x => !x.check)
      return { ...prevState, toDoList: filteredList }
    })
  }

  handleCheck = stringId => {
    const index = this.getIndex(stringId)

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
  }

  handleRemove = stringId => {
    const index = this.getIndex(stringId)

    this.setState(prevState => {
      const newList = prevState.toDoList.filter((item, i) => index !== i)
      return { ...prevState, toDoList: [...newList] }
    })
  }

  getIndex = stringId => {
    const id = Number(stringId) // convert string to number
    return this.state.toDoList.findIndex(x => x.id === id)
  }

  setFocusOnItemEntry = () => {
    // sets focus back to input on rerender
    document.getElementById('newItem').focus()
  }

  updatePersistentData = () => {
    localStorage.setItem('myToDoList', JSON.stringify(this.state))
  }

  render() {
    return (
      <div>
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
            handleRemove={this.handleRemove}
            handleClearChecked={this.handleClearChecked}
          />
        </main>
        <Footer />
      </div>
    )
  }
}
