import React, { useContext } from "react";
//Contexto de id proyecto 
import ProjectContext from "../context/ProjectContext";
//props= itemList={proyect} key={proyectId} typeUser={"analist"} index={proyect[0]}
const ProyectItem = (props) => {
  //Contexto para mostrar datos del proyecto
  const {setSelect} = useContext(ProjectContext);
  const selection = () => {setSelect(props.index)};
  const [id, nproy, dateproy, areaproy, typeproy, statuspro] = props.itemList;
  return (
    <>
      <tr>
        <th scope="row">{id}</th>
        <td>{nproy}</td>
        <td>{dateproy}</td>
        <td>{areaproy}</td>
        <td>{typeproy}</td>
        <td>{statuspro}</td>
        <td>
          <button
            type="button"
            className="btn btn-primary btn"
            data-bs-toggle="modal"
            //Call to recovery modal container
            data-bs-target="#viewProyectModal"
            onClick={selection}
          >
            ver
          </button>
        </td>
      </tr>
    </>
  );
};

export default ProyectItem;
