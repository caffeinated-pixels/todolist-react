import React, { useState, useEffect, useRef } from 'react'
import { ToDos, ToDoItem } from '../constants/interfaces'
import NewItemEntry from './NewItemEntry'
import ListContainer from './ListContainer'
import Footer from './Footer'

export default function App() {
  const [toDos, setToDos] = useState<ToDos>({
    toDoList: [] as ToDoItem[],
    toDoItem: '',
    confirmation: '',
    idTally: 0,
  })

  const newItemRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const storedState = localStorage.getItem('myToDoList')
    if (typeof storedState !== 'string') return // should be a string
    const parsedState = JSON.parse(storedState) // convert back to JSON

    setToDos((prevState) => ({
      ...prevState,
      toDoList: parsedState.toDoList,
      idTally: parsedState.idTally,
    }))
  }, [])

  useEffect(() => {
    // save todos to localStorage on every update
    localStorage.setItem('myToDoList', JSON.stringify(toDos))
  }, [toDos])

  const handleTextInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToDos((prevState) => ({
      ...prevState,
      toDoItem: event.target.value,
    }))
  }

  const processSubmission = () => {
    // add input text to state.toDoItem & clear input box
    const newEntryText: string = toDos.toDoItem.trim() // trim whitespace

    if (newEntryText.length === 0) return // stops if length < 1
    setToDos((prevState) => ({
      toDoList: [
        ...prevState.toDoList,
        {
          id: prevState.idTally.toString(),
          check: false,
          toDoItem: newEntryText,
        },
      ],
      toDoItem: '',
      confirmation: `${newEntryText} added.`,
      idTally: prevState.idTally + 1,
    }))
  }

  const setFocusOnItemEntry = () => {
    // sets focus back to input on rerender
    if (newItemRef.current !== null) {
      newItemRef.current.focus()
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault() // prevents page reloading on submit
    processSubmission()
    setFocusOnItemEntry()
  }

  const handleClear = () => {
    const { toDoList } = toDos
    // check if list contains any items before clearing
    if (toDoList.length) {
      const confirmed = window.confirm(
        'Are you sure you want to delete the entire list?'
      )
      if (confirmed) {
        setToDos((prevState) => ({
          ...prevState,
          toDoList: [],
          idTally: 0,
        }))
      }
    }
  }

  const handleClearChecked = () => {
    setToDos((prevState) => {
      const filteredList = prevState.toDoList.filter(
        (toDoItem) => !toDoItem.check
      )
      return { ...prevState, toDoList: filteredList }
    })
  }

  const getIndex = (stringId: string) => {
    return toDos.toDoList.findIndex((toDoItem) => toDoItem.id === stringId)
  }

  const handleCheck = (stringId: string) => {
    const index = getIndex(stringId)
    const removedText = toDos.toDoList[index].toDoItem

    // updated check property for toDoItem in state
    setToDos((prevState) => {
      const updatedList = [...prevState.toDoList]

      const isChecked = prevState.toDoList[index].check
        ? 'unchecked'
        : 'checked'

      updatedList[index].check = !updatedList[index].check
      return {
        ...prevState,
        toDoList: updatedList,
        confirmation: `${removedText} ${isChecked}.`,
      }
    })
  }

  const handleRemove = (stringId: string) => {
    const index = getIndex(stringId)

    setToDos((prevState) => {
      const newList = prevState.toDoList.filter((item, i) => index !== i)
      return { ...prevState, toDoList: [...newList] }
    })
  }

  return (
    <div>
      <main>
        <NewItemEntry
          ref={newItemRef}
          handleTextInput={handleTextInput}
          handleSubmit={handleSubmit}
          value={toDos.toDoItem}
        />
        <ListContainer
          toDoList={toDos.toDoList}
          handleClear={handleClear}
          handleCheck={handleCheck}
          confirmation={toDos.confirmation}
          handleRemove={handleRemove}
          handleClearChecked={handleClearChecked}
        />
      </main>
      <Footer />
    </div>
  )
} // end of comp
