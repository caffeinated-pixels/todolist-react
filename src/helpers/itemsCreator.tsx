import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

interface ToDoItem {
  id: number
  check: boolean
  toDoItem: string
}

interface Props {
  toDoList: ToDoItem[]
  handleCheck: (stringId: string) => void
  handleRemove: (stringId: string) => void
  handleClearChecked?: () => void
}

export default function itemsCreator(props: Props, isChecked: boolean) {
  let filtered = []
  // tests whether to filter for checked or unchecked items
  if (!isChecked) {
    filtered = props.toDoList.filter((entry) => !entry.check)
  } else {
    filtered = props.toDoList.filter((entry) => entry.check)
  }

  return filtered.map((entry, i) => {
    return (
      <div key={i} className="itemContainer">
        <div className="item">
          <input
            type="checkbox"
            id={entry.id}
            tabIndex={0}
            checked={entry.check}
            className="checkbox"
            onChange={() => props.handleCheck(entry.id)}
          />
          <label htmlFor={entry.id}>{entry.toDoItem}</label>
        </div>

        <FontAwesomeIcon
          icon={faTimes}
          className="delete"
          onClick={() => props.handleRemove(entry.id)}
          role="button"
          tabIndex={0}
          aria-label="Delete item"
          aria-hidden="false"
          focusable="true"
        />
      </div>
    )
  })
}
