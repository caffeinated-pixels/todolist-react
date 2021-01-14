import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default function itemsCreator(props, isChecked) {
  let filtered = []

  if (!isChecked) {
    filtered = props.toDoList.filter(entry => !entry.check)
  } else {
    filtered = props.toDoList.filter(entry => entry.check)
  }

  return filtered.map((entry, i) => {
    return (
      <div key={i} className="itemContainer">
        <div className="item">
          <input
            type="checkbox"
            id={entry.id}
            tabIndex="0"
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
          aria-label="Delete item"
        />
      </div>
    )
  })
}
