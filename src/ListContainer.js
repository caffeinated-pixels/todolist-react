import React from 'react'

export default function ListContainer(props) {
  const toDoItems = props.toDoList.map((entry, i) => {
    return (
      <div key={i} className="item">
        <input
          type="checkbox"
          id={i}
          tabIndex="0"
          checked={entry.check}
          className="checkbox"
          onChange={props.handleCheck}
        />
        <label htmlFor={i}>{entry.toDoItem}</label>
      </div>
    )
  })

  return (
    <section className="listContainer">
      <div className="listTitle">
        <h1 tabIndex="0">To-Do List</h1>
        <button
          id="clearItems"
          className="button"
          title="Clear the list"
          aria-label="Remove all items from the list"
          tabIndex="0"
          onClick={props.handleClear}
        >
          clear
        </button>
      </div>
      <hr />
      <div id="listItems">{toDoItems}</div>
      <p id="confirmation" className="confirmation" aria-live="assertive"></p>
    </section>
  )
}
