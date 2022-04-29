export interface ToDoItem {
  id: number
  check: boolean
  toDoItem: string
}

export interface ToDos {
  toDoList: ToDoItem[]
  toDoItem: string
  confirmation: string
  idTally: number
}
