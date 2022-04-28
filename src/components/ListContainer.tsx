import ListTitle from './ListTitle.tsx'
import UncheckedItems from './UncheckedItems.tsx'
import CheckedItems from './CheckedItems.js'

interface Props {
  handleClear: () => void
  toDoList: []
  handleCheck: (stringId: string) => void
  handleRemove: (stringId: string) => void
  handleClearChecked: () => void
  confirmation: string
}

export default function ListContainer(props: Props) {
  return (
    <section className="listContainer">
      <ListTitle handleClear={props.handleClear} />
      <hr />
      <UncheckedItems
        toDoList={props.toDoList}
        handleCheck={props.handleCheck}
        handleRemove={props.handleRemove}
      />
      <CheckedItems
        toDoList={props.toDoList}
        handleCheck={props.handleCheck}
        handleRemove={props.handleRemove}
        handleClearChecked={props.handleClearChecked}
      />
      <p id="confirmation" className="confirmation" aria-live="assertive">
        {props.confirmation}
      </p>
    </section>
  )
}
