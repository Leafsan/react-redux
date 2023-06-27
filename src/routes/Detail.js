import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Detail() {
  const id = useParams().id;
  const toDos = useSelector((state) => state);
  const toDo = toDos.find((toDo) => toDo.id === parseInt(id));

  return (
    <>
      <h1>Detail</h1>
      <div>{toDo?.text}</div>
      <div>Created at: {toDo?.id}</div>
    </>
  );
}

export default Detail;
