import React from 'react'

export default function CheckedItems(props) {
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

  return <div id="checkedItems">{checkedItems}</div>
}
