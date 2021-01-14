import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default function CheckedItems(props) {
  const checked = props.toDoList.filter(entry => entry.check)

  const checkedItems = checked.map((entry, i) => {
    return (
      <div key={i} className="itemContainer">
        <div className="item checked">
          <input
            type="checkbox"
            id={entry.id}
            tabIndex="0"
            checked={entry.check}
            className="checkbox"
            onChange={() => props.handleCheck(entry.id)}
          />
          <label htmlFor={entry.id}>{entry.toDoItem}</label>
        </div>
        <FontAwesomeIcon
          icon={faTimes}
          className="delete"
          onClick={() => props.handleRemove(entry.id)}
          role="button"
          aria-label="Delete item"
        />
      </div>
    )
  })

  const itemsNum = checkedItems.length
  const itemOrItems = itemsNum > 1 ? 'Items' : 'Item'

  if (itemsNum > 0) {
    return (
      <div id="checkedItems" className="checkedItems">
        <hr />
        <h3 className="itemsHeader">
          {itemsNum} Completed {itemOrItems}
        </h3>
        {checkedItems}
      </div>
    )
  } else {
    return <div id="checkedItems"></div>
  }
}
