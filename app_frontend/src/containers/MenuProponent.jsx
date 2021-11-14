import React from "react";
//Import CSS
import '@styles/menu.css';

const MenuProponent = () => {
  return (
    <div>
      <button
        type="button"
        className="menu_buton"
        data-bs-toggle="modal"
        //Call to register modal container
        data-bs-target="#registerIdeaModal"
      >
        Proponer proyecto o idea de investigación
      </button>
      
      <button
        type="button"
        className="menu_buton"
        data-bs-toggle="modal"
        //Call to register modal container
        data-bs-target="#UpdateProponentModal"
      >
        Realizar actualización de datos personales
      </button>
      
      <button
        type="button"
        className="menu_buton"
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
