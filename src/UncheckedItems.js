import React from 'react'
import itemsCreator from './itemsCreator'
import isPlural from './isPlural'

export default function UncheckedItems(props) {
  const uncheckedItems = itemsCreator(props, false)

  const itemsNum = uncheckedItems.length
  const itemOrItems = isPlural(itemsNum)

  return (
    <div id="uncheckedItems">
      <h3 className="itemsHeader">
        {itemsNum} Uncompleted {itemOrItems}
      </h3>
      {uncheckedItems}
    </div>
  )
}
