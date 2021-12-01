import React, { useContext } from "react";
import ComentaryAdd from "../components/ComentaryAdd";
import ComentaryItem from "../components/ComentaryItem";
//Contexto de id proyecto 
import ProjectContext from "../context/ProjectContext";
//CSS
import "@styles/comentary.css";

const ComentaryBox = () => {
    // Cargo los comentarios guardados en el context
  const {comments} = useContext(ProjectContext);

  return (
    <div className="comentary">
      <h4 className="comentary_title">Bitácora de comentarios</h4>
      <br />
        {comments.map((comment) => {
          return (
            <ComentaryItem itemList={comment} key={comment[0]} />
          );
        })}
      <ComentaryAdd />
    </div>
  );
};

export default ComentaryBox;
