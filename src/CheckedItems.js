import React from 'react'
import itemsCreator from './itemsCreator'

export default function CheckedItems(props) {
  const checkedItems = itemsCreator(props, true)

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
