import React from 'react'

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
        <p className="delete">X</p>
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
