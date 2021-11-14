import React, { useState, useContext } from "react";
//Consulta a lal API
import projectRequest from "../requests/projectRequest";
//Contexto de id proyecto
import ProjectContext from "../context/ProjectContext";

const InfoProject = () => {
  //Contexto para mostrar datos del proyecto
  const { select } = useContext(ProjectContext);
  //Instanció request - modulo para las consulta a la BD
  const { getProjectById } = projectRequest();
  //Creo un metodo para cargar los datos
  //de cada proyecto seleccionado 
  loadgetProjectBy => {
    if (id != null) {
        getProjectById(select)
        .then((response) => {
          return response;
        })
        .then((response) => {
          const lengthResponse = Object.keys(response).length;
          if (lengthResponse > 0) {
            e.preventDefault();
            const userName = response.user_name;
            const userEmail = response.user_mail;
            const userId = response.user_id;
            cookies.set("userName", userName, { path: "/" });
            cookies.set("userId", userId, { path: "/" });
            cookies.set("userEmail", userEmail, { path: "/" });
            window.location.href = "/proponent-home/";
          }
        })
        .catch((err) => {
          console.log(`-> component/InfoProject ${err}`);
        });
    } else
      console.log(
        " -> request/projectRequest: Id de project= null en el metodo getProject"
      );
  };

  const [area, setArea] = useState("Not item");
  const [linea, setLinea] = useState("Not item");
  const [type, setType] = useState("Not item");
  const [proyectName, setProyectName] = useState("Not item");
  const [description, setDescription] = useState("Not item");
  const [obs, setObs] = useState("Not item");
  return (
    <>
      <div className="form_lbl_input_groupe row">
        <div className="col-sm-6">
          <label htmlFor="AreaSelect">Área de investigación:</label>
        </div>
        <div className="col-sm-6">
          <label>{area}</label>
        </div>
      </div>
      <div className="form_lbl_input_groupe row">
        <div className="col-sm-6">
          <label htmlFor="AreaSelect">Linea de investigación:</label>
        </div>
        <div className="col-sm-6">
          <label>{linea}</label>
        </div>
      </div>
      <div className="form_lbl_input_groupe row">
        <div className="col-sm-6">
          <label htmlFor="TypeSelect">Tipo de proyecto:</label>
        </div>
        <div className="col-sm-6">
          <label>{type}</label>
        </div>
      </div>
      <div className="form_lbl_input_groupe row">
        <div className="col-sm-6">
          <label>Nombre del proyecto:</label>
        </div>
        <div className="col-sm-6">
          <label>{proyectName}</label>
        </div>
      </div>
      <div className="form_block">
        <div className="mb-3">
          <label htmlFor="descriptionIdeaTextarea" className="form-label">
            Descripción detallada de la idea:
          </label>
          <br />
          <label>{description}</label>
        </div>
        <div className="mb-3">
          <label htmlFor="comentIdeaTextarea" className="form-label">
            Observaciones o comentarios adicionales:
          </label>
          <br />
          <label>{obs}</label>
        </div>
      </div>
    </>
  );
};

export default InfoProject;
