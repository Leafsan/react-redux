import { createStore } from "redux";

const Action = {
  ADD: "ADD_TODO",
  DELETE: "DELETE_TODO",
};
Object.freeze(Action);

export const addToDo = (text) => {
  return {
    type: Action.ADD,
    text,
  };
};

export const deleteToDo = (id) => {
  return {
    type: Action.DELETE,
    id,
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case Action.ADD:
      return [...state, { text: action.text, id: Date.now() }];
    case Action.DELETE:
      return state.filter((toDos) => toDos.id.toString() !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
