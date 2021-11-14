import React from "react";
//Import CSS
import "@styles/menu.css";

const MenuAdmin = () => {
  return (
    <div>
      <button
        type="button"
        className="menu_buton"
        data-bs-toggle="modal"
        data-bs-target="#adminProyectsModal"
      >
        Administrar proyectos
      </button>

      <button
        type="button"
        className="menu_buton"
        data-bs-toggle="modal"
        data-bs-target="#adminUsersModal"
      >
        Administrar usuarios
      </button>

      <button
        type="button"
        className="menu_buton"
        data-bs-toggle="modal"
        data-bs-target="#adminDatesModal"
      >
        Actualizar módulo de fechas
      </button>
    </div>
  );
};

export default MenuAdmin;
