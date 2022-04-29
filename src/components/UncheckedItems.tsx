import itemsCreator from '../helpers/itemsCreator'
import isPlural from '../helpers/isPlural'
import { ToDoItem } from '../constants/interfaces'
interface Props {
  toDoList: ToDoItem[]
  handleCheck: (stringId: string) => void
  handleRemove: (stringId: string) => void
}

export default function UncheckedItems(props: Props) {
  const uncheckedItems = itemsCreator(props, false)

  const itemsNum = uncheckedItems.length
  const itemOrItems = isPlural(itemsNum)

  return (
    <div id="uncheckedItems">
      <h3 className="itemsHeader" tabIndex={0}>
        {itemsNum} Uncompleted {itemOrItems}
      </h3>
      {uncheckedItems}
    </div>
  )
}
