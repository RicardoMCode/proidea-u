import React, { useContext } from "react";
// import ProponentContext from "../context/ProponentContext";
//Import CSS
import '@styles/menuProponent.css';

const MenuProponent = () => {
  //const { addToModule, state } = useContext(ProponentContext);
  //Forma adecuada para actualizar el hook creado
  // const handleClick = () => {
  //     addToModule(ProponentProyects, "Proyectos presentados");
  //   // }
  //   <button
  //   type="button"
  //   className="btn btn-success btn-sm "
  //   onClick={handleClick}
  // >
  //   Ver proyectos presentados
  // </button>
  return (
    <div>
      <button
        type="button"
        className="menu_proponent_buton"
        data-bs-toggle="modal"
        //Call to register modal container
        data-bs-target="#registerIdeaModal"
      >
        Proponer proyecto o idea de investigación
      </button>
      
      <button
        type="button"
        className="menu_proponent_buton"
        data-bs-toggle="modal"
        //Call to register modal container
        data-bs-target="#UpdateProponentModal"
      >
        Realizar actualización de datos personales
      </button>
      
      <button
        type="button"
        className="menu_proponent_buton"
        data-bs-toggle="modal"
        //Call to register modal container
        data-bs-target="#requestToAdminModal"
      >
        Enviar solicitud al administrador
      </button>
    </div>
  );
};

export default MenuProponent;
