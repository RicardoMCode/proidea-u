import React from "react";
import ProyectItem from "../components/ProyectItem";

const ProjectListAnalystView = (props) => {
  const { projects } = props;
  return (
    <table className="table table-hover">
      <thead>
        <tr className="table-active">
          <th scope="col">#</th>
          <th scope="col">Nombre del proyecto</th>
          <th scope="col">Fecha de creación</th>
          <th scope="col">Área</th>
          <th scope="col">Tipo</th>
          <th scope="col">Estado</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project) => {
          return (
            <ProyectItem
              itemList={project}
              key={project[0]}
              index={project[0]}
              proponent={false}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default ProjectListAnalystView;
