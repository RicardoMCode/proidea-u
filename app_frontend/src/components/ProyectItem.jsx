import React, { useContext, useState } from "react";
//Contexto de id proyecto
import ProjectContext from "../context/ProjectContext";
//Request, consultas y actualizaciones a la bd
import comentaryRequest from "../requests/comentaryRequest";
import projectRequest from "../requests/projectRequest";
//Coolkies
import Cookies from "universal-cookie";
const cookies = new Cookies();
const ProyectItem = (props) => {
  //props
  const [id, nombre, area, type, line, description, obs, date, status, userid] =
    props.itemList;
  // request - comentarios proyecto seleccionado
  const { getComentaryByIdProject } = comentaryRequest();
  //Variable para actualizar el estado
  const [selectState, setSelectState] = useState(status);
  //Instanció request para el cambio de estado
  const { changeStatus } = projectRequest();
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
    setComments,
    addComments,
  } = useContext(ProjectContext);
  const selectProject = () => {
    setId(id);
    setName(nombre);
    setArea(area);
    setType(type);
    setLinea(line);
    setDescription(description);
    setObs(obs);
    setStartDay(date);
    setStatus(selectState);
    //Inicializo los comentarios del proyecto
    getComentaryByIdProject(id)
      .then((response) => {
        return Array.from(response.data);
      })
      .then((response) => {
        //response es un array de objetos por lo que mapeo el array y
        //cambio a array cada objeto mapeado para obtener una matriz(array de arrays)
        setComments(response.map((item) => Object.values(item)));
      })
      .catch((error) => {
        console.log(
          `-> /containers/ComentaryBox - getComentaryByIdProject - Error: ${error}`
        );
      });
  };
  //Convierto las fechas del sistema para que sean legibles
  let dt = new Date(date);
  let mm = dt.getMonth() + 1;
  let dd = dt.getDate();
  let yy = dt.getFullYear();
  let currentDate = `${dd}-${mm}-${yy}`;

//Vista proponente
  const TableProponent = () => {
    return (
      <tr>
        <th scope="row"><div className="th_id">{id}</div></th>
        <td>{nombre}</td>
        <td>{selectState}</td>
        <td>
          <button
            type="button"
            className="btn btn-primary btn"
            data-bs-toggle="modal"
            onClick={selectProject}
            data-bs-target="#viewProyectModal"
          >
            ver
          </button>
        </td>
      </tr>
    );
  };
  //VISTA PARA EL ANALISTA  
  //Select para cambio de estado - sólo para analistas
  const SelectChangeState = () => {
    return (
      <div>
        <select
          type="text"
          className="form-select"
          id="StatusSelect"
          defaultValue={selectState}
          onChange={changeStates}
          required
        >
          <option>Nuevo</option>
          <option>En revisión</option>
          <option>Aprobado</option>
          <option>No aprobado</option>
        </select>
      </div>
    );
  };
  //Vista de la tabla
  const TableAnalist = () => {
    return (
      <tr>
        <th scope="row"><div className="th_id">{id}</div></th>
        <td>{nombre}</td>
        <td>{currentDate}</td>
        <td>{area}</td>
        <td>{line}</td>
        <td>{type}</td>
        <td>
          <SelectChangeState />
        </td>
        <td>
          <button
            type="button"
            className="btn btn-primary btn"
            data-bs-toggle="modal"
            onClick={selectProject}
            data-bs-target="#viewProyectModal"
          >
            ver
          </button>
        </td>
      </tr>
    );
  };
  return <>{props.proponent == true ? <TableProponent /> : <TableAnalist />}</>;

  //LÓGICA PARA EL CAMBIO DE ESTADO DE UN PROYECTO
  //Metodo que se activa al cambiar el estado
  function changeStates(e) {
    //Valido si cambió el estado o si sólo accedió el elemento
    if (selectState !== e.currentTarget.value) {
      var rta =
        confirm(`¿ Realmente desea cambiar el estado del proyecto de "${selectState}" a "${e.currentTarget.value}"? 
    - El estado cambiará y se registrará en un comentario.
    - Se notificará mediante correo electrónico al proponente.`);
      if (rta) {
        let create = null;
        const comentary = `Se actualizó el estado del proyecto de "${selectState}" a "${e.currentTarget.value}"`;
        //Llamo el request que se encarga de cambiar el estado en la BD y envíar el correo al proponente
        create = changeStatus(id, e.currentTarget.value , comentary);
        if (create === false) {
          alert(
            "Se presentó un error al cambiar el estado, intentelo nuevamente, si la falla persiste comuniquese con el administrador"
          );
        } else {
          newComentState(comentary);
          setSelectState(e.currentTarget.value);
        }
      }
    }
  }
  //función para generar el comentariol al cambiar el estado
  function newComentState(comentary) {
    let create = null;
    //Instanció request - modulo para las insersiones de el comentario de cambio de estado
    const { createComentary } = comentaryRequest();
    const user = cookies.get('currentUser') ;
    create = createComentary(id, user.user_id, user.user, cookies.get("currentDate"), comentary);
    if (create === false) {
      alert(
        "Se presentó un error al grabar el comentario, comuniquese con el administrador"
      );
    } else {
      //Actualizo el context temporal del comentario con el cambio de estado
      addComments([
        [0, user.user_name, user.user, currentDate, comentary],
      ]);
      alert("El estado se actualizó correctamente");
    }
  }
  //FIN - LÓGICA PARA EL CAMBIO DE ESTADO DE UN PROYECTO
};



export default ProyectItem;
