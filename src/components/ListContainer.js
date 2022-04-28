import ListTitle from './ListTitle.tsx'
import UncheckedItems from './UncheckedItems'
import CheckedItems from './CheckedItems'

export default function ListContainer(props) {
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
