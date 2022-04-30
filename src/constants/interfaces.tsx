export interface ToDoItem {
  id: string
  check: boolean
  toDoItem: string
}

export interface ToDos {
  toDoList: ToDoItem[]
  toDoItem: string
  confirmation: string
  idTally: number
}
