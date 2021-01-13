import React from 'react'
import ListTitle from './ListTitle'

export default function ListContainer(props) {
  const unchecked = props.toDoList.filter(entry => !entry.check)
  const checked = props.toDoList.filter(entry => entry.check)

  const uncheckedItems = unchecked.map((entry, i) => {
    return (
      <div key={i} className="item">
        <input
          type="checkbox"
          id={entry.id}
          tabIndex="0"
          checked={entry.check}
          className="checkbox"
          onChange={props.handleCheck}
        />
        <label htmlFor={entry.id}>{entry.toDoItem}</label>
      </div>
    )
  })

  const checkedItems = checked.map((entry, i) => {
    return (
      <div key={i} className="item">
        <input
          type="checkbox"
          id={entry.id}
          tabIndex="0"
          checked={entry.check}
          className="checkbox"
          onChange={props.handleCheck}
        />
        <label htmlFor={entry.id}>{entry.toDoItem}</label>
      </div>
    )
  })

  return (
    <section className="listContainer">
      <ListTitle handleClear={props.handleClear} />
      <hr />
      <div id="listItems">{uncheckedItems}</div>
      <hr />
      <div id="listItems">{checkedItems}</div>
      <p id="confirmation" className="confirmation" aria-live="assertive">
        {props.confirmation}
      </p>
    </section>
  )
}
