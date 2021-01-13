import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default function UncheckedItems(props) {
  const unchecked = props.toDoList.filter(entry => !entry.check)

  const uncheckedItems = unchecked.map((entry, i) => {
    return (
      <div key={i} className="itemContainer">
        <div className="item">
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

  const itemsNum = uncheckedItems.length
  const itemOrItems = itemsNum === 1 ? 'Item' : 'Items'

  return (
    <div id="uncheckedItems">
      <h3 className="itemsHeader">
        {itemsNum} Uncompleted {itemOrItems}
      </h3>
      {uncheckedItems}
    </div>
  )
}
