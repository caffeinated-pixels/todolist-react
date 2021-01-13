import React from 'react'
import ListTitle from './ListTitle'
import UncheckedItems from './UncheckedItems'

export default function ListContainer(props) {
  const checked = props.toDoList.filter(entry => entry.check)

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
      <UncheckedItems
        toDoList={props.toDoList}
        handleCheck={props.handleCheck}
      />
      <hr />
      <div id="checkedItems">{checkedItems}</div>
      <p id="confirmation" className="confirmation" aria-live="assertive">
        {props.confirmation}
      </p>
    </section>
  )
}
