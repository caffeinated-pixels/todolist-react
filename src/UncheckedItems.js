import React from 'react'
import itemsCreator from './itemsCreator'

export default function UncheckedItems(props) {
  const uncheckedItems = itemsCreator(props, false)

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
