import React from 'react'

export default function CheckedItems(props) {
  const checked = props.toDoList.filter(entry => entry.check)

  const checkedItems = checked.map((entry, i) => {
    return (
      <div key={i} className="item checked">
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

  const itemsNum = checkedItems.length
  const itemOrItems = itemsNum > 1 ? 'Items' : 'Item'

  if (itemsNum > 0) {
    return (
      <div id="checkedItems">
        <hr />
        <h3>
          {itemsNum} Completed {itemOrItems}
        </h3>
        {checkedItems}
      </div>
    )
  } else {
    return <div id="checkedItems"></div>
  }
}
