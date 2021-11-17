import React, { useEffect, useState } from "react";
import ViewProjectModal from "./ViewProjectModal";
//Consulta a la  API
import projectRequest from "../requests/projectRequest";
//Context - manejo de variables entre componentes
import ProjectContext from "../context/ProjectContext";
import useProjectState from "../hooks/useProjectState";
import ProjectListAnalystView from "./ProjectListAnalystView";
import ProjectListPorponentView from "./ProjectListPorponentView";
const ProjectsList = (props) => {
  //Instanció request - modulo para las consulta a la BD
  const { getProjects, getProjectByIdUser } = projectRequest();
  //Creo un estado para guardar el vector con los proyectos
  const [projects, setProjects] = useState([]);
  //Inicializo el arreglo proyectos con los datos de la base de datos
  useEffect(
    //Si la consulta viene desde el módulo proponente, sólo muestra los proyecto de ese proponente
    //Por lo tanto cambia el EndPoint de la API (quien consulta a la BD)
    async () => {
      if (props.proponent == false)
        getProjects()
          .then((response) => {
            return response.data;
          })
          .then((response) => {
            //response es un array de objetos por lo que mapeo el array y
            //cambio a array cada objeto mapeado para obtener una matriz(array de arrays)
            setProjects(response.map((item) => Object.values(item)));
          })
          .catch((error) => {
            console.log(`-> /components/ProjectsList - getProjects - Error: ${error}`);
          });
      else
        getProjectByIdUser(props.proponent)
          .then((response) => {
            return response.data;
          })
          .then((response) => {
            //response es un array de objetos por lo que mapeo el array y
            //cambio a array cada objeto mapeado para obtener una matriz(array de arrays)
            setProjects(response.map((item) => Object.values(item)));
          })
          .catch((error) => {
            console.log(
              `-> /components/ProjectsList - getProjectByIdUser - Error: ${error}`
            );
          });
    },
    []
  );
  const projectState = useProjectState();

  return (
    <ProjectContext.Provider value={projectState}>
      <div className="table_proyect"> 
      {(props.proponent == false) ? <ProjectListAnalystView projects={projects}/> : <ProjectListPorponentView projects={projects} />}
      </div>
      <ViewProjectModal />
    </ProjectContext.Provider>
  );
};

export default ProjectsList;
