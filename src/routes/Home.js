import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo, deleteToDo } from "../store";

function Home() {
  const [text, setText] = useState("");

  function onChange(event) {
    setText(event.target.value);
    console.log(event.target.value);
  }

  const toDos = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(toDos);

  function onSubmit(event) {
    event.preventDefault();
    dispatch(addToDo(text));
    setText("");
  }

  function onClick(event) {
    console.log(event.target.parentNode.id);
    dispatch(deleteToDo(event.target.parentNode.id));
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <input type="submit" value="Add" />
      </form>
      <ul>
        {toDos.map((element) => (
          <li key={element.id} id={element.id}>
            {element.text}
            <button onClick={onClick}>DEL</button>
          </li>
        ))}
      </ul>
    </>
  );
}

// function mapStateToProps(state) {
//   return { toDos: state };
// }
//
// function mapDispatchToProps(dispatch) {
//   return {
//     addToDo: (text) => dispatch(actionCreators.addToDo(text)),
//     deleteToDo: (id) => dispatch(actionCreators.deleteToDo(id)),
//   };
// }

export default Home;
