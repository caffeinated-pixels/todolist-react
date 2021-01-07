import React from 'react'

export default function ListContainer() {
  return (
    <section class="listContainer">
      <div class="listTitle">
        <h1 tabindex="0">To-Do List</h1>
        <button
          id="clearItems"
          class="button"
          title="Clear the list"
          aria-label="Remove all items from the list"
          tabindex="0"
        >
          clear
        </button>
      </div>
      <hr />
      <div id="listItems">
        <div class="item">
          <input type="checkbox" id="1" tabindex="0" class="checkbox" />
          <label for="1">eat</label>
        </div>
        <div class="item">
          <input type="checkbox" id="2" tabindex="0" />
          <label for="2">sleep</label>
        </div>
      </div>
      <p id="confirmation" class="confirmation" aria-live="assertive"></p>
    </section>
  )
}
