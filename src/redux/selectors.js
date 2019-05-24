export const getTodoState = store => store.todos;

export const getTodoList = store =>
  getTodoState(store) ? getTodoState(store).allIds : []

export const getTodoById = (store, id) => 
  getTodoState(store) ? { ...getTodoState(store).byIds[id], id } : {}

export const getTodos = store => 
  getTodoList(store).map(id => getTodoById(store, id))