import React from 'react'
import ListTitle from './ListTitle'
import UncheckedItems from './UncheckedItems'
import CheckedItems from './CheckedItems'

export default function ListContainer(props) {
  return (
    <section className="listContainer">
      <ListTitle handleClear={props.handleClear} />
      <hr />
      <UncheckedItems
        toDoList={props.toDoList}
        handleCheck={props.handleCheck}
      />
      <CheckedItems toDoList={props.toDoList} handleCheck={props.handleCheck} />
      <p id="confirmation" className="confirmation" aria-live="assertive">
        {props.confirmation}
      </p>
    </section>
  )
}
