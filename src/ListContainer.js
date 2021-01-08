import React from 'react'

export default function ListContainer(props) {
  const toDoItems = props.toDoList.map((toDoItem, i) => {
    return (
      <div key={i} className="item">
        <input type="checkbox" id={i} tabIndex="0" className="checkbox" />
        <label htmlFor={'i'}>{toDoItem}</label>
      </div>
    )
  })

  return (
    <section className="listContainer">
      <div className="listTitle">
        <h1 tabIndex="0">To-Do List</h1>
        <button
          id="clearItems"
          className="button"
          title="Clear the list"
          aria-label="Remove all items from the list"
          tabIndex="0"
        >
          clear
        </button>
      </div>
      <hr />
      <div id="listItems">{toDoItems}</div>
      <p id="confirmation" className="confirmation" aria-live="assertive"></p>
    </section>
  )
  // return (
  //   <section className="listContainer">
  //     <div className="listTitle">
  //       <h1 tabIndex="0">To-Do List</h1>
  //       <button
  //         id="clearItems"
  //         className="button"
  //         title="Clear the list"
  //         aria-label="Remove all items from the list"
  //         tabIndex="0"
  //       >
  //         clear
  //       </button>
  //     </div>
  //     <hr />
  //     <div id="listItems">
  //       <div className="item">
  //         <input type="checkbox" id="1" tabIndex="0" className="checkbox" />
  //         <label htmlFor="1">eat</label>
  //       </div>
  //       <div className="item">
  //         <input type="checkbox" id="2" tabIndex="0" />
  //         <label htmlFor="2">sleep</label>
  //       </div>
  //     </div>
  //     <p id="confirmation" className="confirmation" aria-live="assertive"></p>
  //   </section>
  // )
}
