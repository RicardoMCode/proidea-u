import React, { useState } from "react";
import SelectInvestigationLine from "../components/SelectInvestigationLine";

const MenuAnalyst = () => {
  const [line, setLine] = useState("");
  const [area, setArea] = useState("");
  return (
    <div>
      <h4 className="home_menu_analist_title">Filtros</h4>
      <div className="row filter_content">
        <div className="col-4 home_menu_analist_lbl">
          <label htmlFor="stateSelect">Estado:</label>
        </div>
        <div className="col-6 home_menu_analist_filterItem">
          <select
            type="text"
            className="form-select"
            id="stateSelect"
            name="Area"
            // onChange={(event) => {
            //   setState(event.currentTarget.value);
            // }}
            required
          >
            <option></option>
            <option>Nuevo</option>
            <option>Gestión</option>
            <option>Aprobado</option>
            <option>Negado</option>
          </select>
        </div>

        <div className="col-4 home_menu_analist_lbl">
          <label>Fecha:</label>
        </div>
        <div className="col-8 home_menu_analist_filterItem">
          <label>Desde</label>
          <br />
          <input
            type="date"
            name="date"
            //   onChange={(event) => {
            //     setName(event.currentTarget.value);
            //   }}
          />
          <br />
          <label>Hasta</label>
          <br />
          <input
            type="date"
            name="date"
            //   onChange={(event) => {
            //     setName(event.currentTarget.value);
            //   }}
          />
        </div>

        <div className="home_menu_analist_groupe">
          <label htmlFor="AreaSelect">Área de investigación:</label>
          <div className="col-8">
            <select
              type="text"
              className="form-select"
              id="AreaSelect"
              name="Area"
              onChange={(event) => {
                setArea(event.currentTarget.value);
              }}
              required
            >
              <option></option>
              <option>Ciencias Agrarias, Ingeniería y Tecnología</option>
              <option>Ciencias Naturales</option>
              <option>Ciencias Sociales</option>
            </select>
          </div>

          <label htmlFor="LineSelect">Línea de investigación:</label>
          <div className="col-8 ">
            {/* Renderizo la línea de investigación de acuerdo al área seleccionada */}
            <SelectInvestigationLine set={setLine} area={area} required />
          </div>
          <div className="btn_filter">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-toggle="modal"
            >
              FILTRAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuAnalyst;
