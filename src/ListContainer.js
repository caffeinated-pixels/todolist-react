import React from 'react'

export default function ListContainer(props) {
  // const unchecked = props.toDoList.filter(entry => !entry.check)
  // const checked = props.toDoList.filter(entry => entry.check)

  const uncheckedItems = props.toDoList.map((entry, i) => {
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

  // const checkedItems = checked.map((entry, i) => {
  //   return (
  //     <div key={i} className="item">
  //       <input
  //         type="checkbox"
  //         id={i}
  //         tabIndex="0"
  //         checked={entry.check}
  //         className="checkbox"
  //         onChange={props.handleCheck}
  //       />
  //       <label htmlFor={i}>{entry.toDoItem}</label>
  //     </div>
  //   )
  // })

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
      <div id="listItems">{uncheckedItems}</div>

      <p id="confirmation" className="confirmation" aria-live="assertive">
        {props.confirmation}
      </p>
    </section>
  )
}
