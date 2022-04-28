import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

interface Props {
  handleTextInput: (event: any) => void
  handleSubmit: (event: any) => void
  value: string
}

export default function NewItemEntry(props: Props) {
  return (
    <section className="newItemEntry">
      <form id="itemEntryForm" onSubmit={props.handleSubmit}>
        <label htmlFor="newItemEntry">Enter a new to-do item</label>
        <input
          id="newItem"
          type="text"
          size={40}
          autoComplete="off"
          placeholder="Add Item"
          tabIndex={0}
          value={props.value}
          onChange={props.handleTextInput}
        />
        <button
          id="addItem"
          className="button"
          title="Add new item"
          aria-label="Add new item to list"
          tabIndex={0}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </form>
    </section>
  )
}
