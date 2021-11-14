import React, { useState, useContext } from "react";
//Consulta a lal API
import projectRequest from "../requests/projectRequest";
//Contexto de id proyecto
import ProjectContext from "../context/ProjectContext";

const InfoProject = () => {
  //Instanció request - modulo para las consulta a la BD
  const { getProjectById } = projectRequest();
  //Contexto para recibir el id del proyecto seleccionado ¿
  const { select } = useContext(ProjectContext);
  //States para almacenar los datos del proyecto seleccionado
  const [area, setArea] = useState("Not item");
  const [linea, setLinea] = useState("Not item");
  const [type, setType] = useState("Not item");
  const [proyectName, setProyectName] = useState("Not item");
  const [description, setDescription] = useState("Not item");
  const [obs, setObs] = useState("Not item");
  const [startDay, setStartDay] = useState("Not item");
  const [status, setStatus] = useState("Not item");
  //Método para rellenar los state - recibe un objeto al cual le hacemos destructurin
  const fillin = ({project_name, project_area, project_type, project_line, project_description, project_obs, project_start_date, project_status}) => {
    setProyectName(project_name);
    setArea(project_area);
    setType(project_type);
    setLinea(project_line);
    setDescription(project_description);
    setObs(project_obs);
    setStartDay(project_start_date);
    setStatus(project_status);
  }
  //Creo un metodo para cargar los datos
  //de cada proyecto seleccionado 
  const loadgetProjectBy = () => {
    if (select != null) {
        getProjectById(select)
        .then((response) => {
          //Retorna un objeto con los datos del proyecto
          return response.data[0];
        })
        .then((response) => {
          //Saco los valores del objeto usando destructuring y actualizo los estados 
          fillin(response);
        })
        .catch((err) => {
          console.log(`-> component/InfoProject ${err}`);
        });
    } else
      console.log(
        " -> request/projectRequest: Id de project= null en el metodo getProject"
      );
  };
  loadgetProjectBy();
  return (
    <>
      <div className="form_lbl_lbl_groupe row">
        <div className="col-sm-3">
          <label htmlFor="AreaSelect">Área de investigación:</label>
        </div>
        <div className="col-sm-9">
          <label>{area}</label>
        </div>
      </div>
      <div className="form_lbl_lbl_groupe row">
        <div className="col-sm-3">
          <label htmlFor="AreaSelect">Linea de investigación:</label>
        </div>
        <div className="col-sm-9">
          <label>{linea}</label>
        </div>
      </div>
      <div className="form_lbl_lbl_groupe row">
        <div className="col-sm-3">
          <label htmlFor="TypeSelect">Tipo de proyecto:</label>
        </div>
        <div className="col-sm-8">
          <label>{type}</label>
        </div>
      </div>
      <div className="form_lbl_lbl_groupe row">
        <div className="col-sm-3">
          <label>Nombre del proyecto:</label>
        </div>
        <div className="col-sm-8">
          <label>{proyectName}</label>
        </div>
      </div>
      <div className="form_lbl_lbl_groupe row">
        <div className="col-sm-3">
          <label>Fecha de registro:</label>
        </div>
        <div className="col-sm-8">
          <label>{startDay}</label>
        </div>
      </div>
      <div className="form_lbl_lbl_groupe row">
        <div className="col-sm-3">
          <label>Estado:</label>
        </div>
        <div className="col-sm-8">
          <label>{status}</label>
        </div>
      </div>
      <div>
        <div className="mb-3 form_lbl_lbl_groupe">
          <label htmlFor="descriptionIdeaTextarea" className="form-label">
            Descripción de la idea:
          </label>
          <br />
          <label>{description}</label>
        </div>
        <div className="mb-3 form_lbl_lbl_groupe  ">
          <label htmlFor="comentIdeaTextarea" className="form-label">
            Observaciones adicionales:
          </label>
          <br />
          <label>{obs}</label>
        </div>
      </div>
    </>
  );
};

export default InfoProject;
