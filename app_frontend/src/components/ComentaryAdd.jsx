import React, { useState, useContext } from "react";
//Contexto de id proyecto
import ProjectContext from "../context/ProjectContext";
//Coolkies
import Cookies from "universal-cookie";
const cookies = new Cookies();
//request to APi
import comentaryRequest from "../requests/comentaryRequest";

const ComentaryAdd = () => {
  let create = null;
  //Creo el estado para guardar el comentario
  const [comentary, setComentary] = useState("");
  //Instanció request - modulo para las insersiones
  const { createComentary } = comentaryRequest();
  //Contexto para mostrar datos del proyecto
  const { id, addComments, comments } = useContext(ProjectContext);
  //Metodo para cargar el comentario
  const addComentary = () => {
    if (comentary !== "") {
      const currentDate = cookies.get("currentDate");
      const user = cookies.get('currentUser');
      create = createComentary(id, user.user_id , user.user, currentDate, comentary);
      document.getElementById("cometary").value = "";
      if (create === false) {
        alert(
          "Se presentó un error al grabar el comentario, comuniquese con el administrador"
        );
      } else {
        //Creo el context temporal para no tener q ir a la DB
        addComments([
          [0, user.user_name, user.user, currentDate, comentary],
        ]);
      }
    } else alert("Debe registrar un comentario");
  };

  return (
    <>
      <div className="mb-3">
        <label className="form-label">Agregar cometario:</label>
        <textarea
          className="form-control"
          id="cometary"
          rows="2"
          onChange={(event) => {
            setComentary(event.currentTarget.value);
          }}
        ></textarea>
        <br />
        <div className="comentary_buttons">
          <button
            type="button"
            className="btn btn-primary"
            onClick={addComentary}
          >
            Comentar
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Salir
          </button>
        </div>
      </div>
    </>
  );
};

export default ComentaryAdd;
