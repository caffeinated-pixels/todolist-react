import React from 'react'

export default function ListTitle(props) {
  return (
    <div className="listTitle">
      <h1 tabIndex="0">To-Do List</h1>
      <button
        id="clearItems"
        className="button"
        title="Clear entire list"
        aria-label="Remove all items from the list"
        tabIndex="0"
        onClick={props.handleClear}
      >
        clear all
      </button>
    </div>
  )
}
