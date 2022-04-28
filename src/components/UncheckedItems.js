import itemsCreator from '../helpers/itemsCreator'
import isPlural from '../helpers/isPlural'

export default function UncheckedItems(props) {
  const uncheckedItems = itemsCreator(props, false)

  const itemsNum = uncheckedItems.length
  const itemOrItems = isPlural(itemsNum)

  return (
    <div id="uncheckedItems">
      <h3 className="itemsHeader" tabIndex="0">
        {itemsNum} Uncompleted {itemOrItems}
      </h3>
      {uncheckedItems}
    </div>
  )
}
