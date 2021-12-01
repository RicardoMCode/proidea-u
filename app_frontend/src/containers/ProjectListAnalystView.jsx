import React from "react";
import ProyectItem from "../components/ProyectItem";

const ProjectListAnalystView = (props) => {
  const { projects } = props;
  return (
    <table className="table table-hover">
      <thead>
        <tr className="table-active">
          <th scope="col"><div className="th_id"># Id</div></th>
          <th scope="col"><div className="th_name">Nombre del proyecto</div></th>
          <th scope="col"><div className="th_date">Fecha de creación</div></th>
          <th scope="col">Área</th>
          <th scope="col">Linea</th>
          <th scope="col">Tipo</th>
          <th scope="col"><div className="th_status">Estado</div></th>
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
