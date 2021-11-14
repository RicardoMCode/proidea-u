import React, { useEffect, useState} from "react";
import ProyectItem from "../components/ProyectItem";
//Para peticiones a la Api
import Axios from "axios";
const BaseUrl = "http://localhost:3001/api/v1/projects/";
const ProyectsList = () => {
  //Creo un estado para guardar el vector con los proyectos
  const [proyects, setProyects] = useState([]);
  //Inicializo el arreglo proyectos con los datos de la base de datos
  useEffect(
    async () =>
      await Axios.get(BaseUrl)
        .then((response) => {
          return response.data;
        })
        .then((response) => {
          //response es un array de objetos por lo que mapeo el array y 
          //cambio a array cada objeto mapeado para obtener una matriz(array de arrays)
          setProyects(response.map((item) => Object.values(item)));
        })
        .catch((error) => {
          console.log(`-> /components/ProyectsList - Error: ${error}`);
        }),
    []
  );

  return (
    <div className="table_proyect">
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
          {proyects.map((proyect) => {
            return <ProyectItem itemList={proyect} key={proyect[0]} index={proyect[0]} typeuser={"analist"} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProyectsList;
