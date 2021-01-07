import React from 'react'

export default function NewItemEntry(props) {
  return (
    <section className="newItemEntry">
      <form id="itemEntryForm">
        <label htmlFor="newItemEntry">Enter a new to-do item</label>
        <input
          id="newItem"
          type="text"
          size="40"
          autoComplete="off"
          placeholder="Add Item"
          tabIndex="0"
        />
        <button
          id="addItem"
          className="button"
          title="Add new item"
          aria-label="Add new item to list"
          tabIndex="0"
          onClick={props.handleSubmit}
        >
          +
        </button>
      </form>
    </section>
  )
}
