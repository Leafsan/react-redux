import { Link } from "react-router-dom";

function ToDo({ text, onBtnClick, id }) {
  return (
    <li id={id}>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onBtnClick}>DEL</button>
    </li>
  );
}

export default ToDo;
