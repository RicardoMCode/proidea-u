import React, { useContext, useEffect } from "react";
//Contexto de id proyecto
import ProjectContext from "../context/ProjectContext";
//props= itemList={proyect} key={proyectId} typeUser={"analist"} index={proyect[0]}
const ProyectItem = (props) => {
  //Contexto para mostrar datos del proyecto seleccionado
  const {
    setId,
    setArea,
    setLinea,
    setType,
    setName,
    setDescription,
    setObs,
    setStartDay,
    setStatus,
  } = useContext(ProjectContext);
  const [id, nombre, area, type, line, description, obs, date, status, userid] =
    props.itemList;
  useEffect(() => {
    setId(id);
    setName(nombre);
    setArea(area);
    setType(type);
    setLinea(line);
    setDescription(description);
    setObs(obs);
    setStartDay(date);
    setStatus(status);
  }, []);
  //Tradusco las fechas del sistema para que sean legibles
  let dt = new Date(date);
  let mm = dt.getMonth() + 1;
  let dd = dt.getDate();
  let yy = dt.getFullYear();
  let currentDate = `${yy}-${mm}-${dd}`;
  //Vista proponente
  const TableProponent = () => {
    return (
      <tr>
        <th scope="row">{id}</th>
        <td>{nombre}</td>
        <td>{currentDate}</td>
        <td>{status}</td>
        <td>
          <button
            type="button"
            className="btn btn-primary btn"
            data-bs-toggle="modal"
            //Call to recovery modal container
            data-bs-target="#viewProyectModal"
          >
            ver
          </button>
        </td>
      </tr>
    );
  };
  //Vista analista
  const TableAnalist = () => {
    return (
            <tr>
        <th scope="row">{id}</th>
        <td>{nombre}</td>
        <td>{currentDate}</td>
        <td>{area}</td>
        <td>{type}</td>
        <td>{status}</td>
        <td>
          <button
            type="button"
            className="btn btn-primary btn"
            data-bs-toggle="modal"
            //Call to recovery modal container
            data-bs-target="#viewProyectModal"
          >
            ver
          </button>
        </td>
      </tr>
    );
  };
  return (
    <>
      {props.proponent == true ? (
        <TableProponent />
      ) : (
        <TableAnalist />
      )}


    </>
  );
};

export default ProyectItem;
