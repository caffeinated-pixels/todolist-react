import React from 'react'

export default function NewItemEntry() {
  return (
    <section class="newItemEntry">
      <form id="itemEntryForm">
        <label for="newItemEntry">Enter a new to-do item</label>
        <input
          id="newItem"
          type="text"
          size="40"
          autocomplete="off"
          placeholder="Add Item"
          tabindex="0"
        />
        <button
          id="addItem"
          class="button"
          title="Add new item"
          aria-label="Add new item to list"
          tabindex="0"
        >
          +
        </button>
      </form>
    </section>
  )
}
