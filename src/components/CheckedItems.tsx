import itemsCreator from '../helpers/itemsCreator'
import isPlural from '../helpers/isPlural'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'

interface ToDoItem {
  id: number
  check: boolean
  toDoItem: string
}

interface Props {
  toDoList: ToDoItem[]
  handleCheck: (stringId: string) => void
  handleRemove: (stringId: string) => void
  handleClearChecked: () => void
}

export default function CheckedItems(props: Props) {
  const checkedItems = itemsCreator(props, true)

  const itemsNum = checkedItems.length
  const itemOrItems = isPlural(itemsNum)

  if (itemsNum > 0) {
    return (
      <div id="checkedItems" className="checkedItems">
        <hr />
        <div className="checkedHeader itemsHeader">
          <h3 className="" tabIndex={0}>
            {itemsNum} Completed {itemOrItems}
          </h3>
          <button
            id="clearItems"
            className="button"
            title="Clear all checked checked items"
            aria-label="Remove all checked items"
            tabIndex={0}
            onClick={props.handleClearChecked}
          >
            clear <FontAwesomeIcon icon={faCheckSquare} />
          </button>
        </div>
        {checkedItems}
      </div>
    )
  } else {
    return <div id="checkedItems"></div>
  }
}
