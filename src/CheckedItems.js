import React from 'react'
import itemsCreator from './itemsCreator'
import isPlural from './isPlural'

export default function CheckedItems(props) {
  const checkedItems = itemsCreator(props, true)

  const itemsNum = checkedItems.length
  const itemOrItems = isPlural(itemsNum)

  if (itemsNum > 0) {
    return (
      <div id="checkedItems" className="checkedItems" tabIndex="0">
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
