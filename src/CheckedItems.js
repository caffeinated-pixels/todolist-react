import React from 'react'
import itemsCreator from './itemsCreator'
import isPlural from './isPlural'

export default function CheckedItems(props) {
  const checkedItems = itemsCreator(props, true)

  const itemsNum = checkedItems.length
  const itemOrItems = isPlural(itemsNum)

  if (itemsNum > 0) {
    return (
      <div id="checkedItems" className="checkedItems">
        <hr />
        <div className="checkedHeader">
          <h3 className="itemsHeader" tabIndex="0">
            {itemsNum} Completed {itemOrItems}
          </h3>
          <button
            id="clearItems"
            className="button"
            title="Clear all checked checked items"
            aria-label="Remove all checked items"
            tabIndex="0"
            onClick={props.handleClear}
          >
            clear checked
          </button>
        </div>
        {checkedItems}
      </div>
    )
  } else {
    return <div id="checkedItems"></div>
  }
}
