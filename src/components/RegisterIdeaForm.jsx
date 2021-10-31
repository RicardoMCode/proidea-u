import React from "react";
//Import CSS
import "@styles/form.css";
const RegisterIdeaForm = () => {
  return (
    <div>
      <form id="IdeaForm" className="modal-body" autoComplete="off">
        <div className="form_lbl_input_groupe row">
          <div className="col-sm-6">
            <label htmlFor="AreaSelect">Área de investigación:</label>
          </div>
          <div className="col-sm-6">
            <select
              type="text"
              className="form-select"
              id="AreaSelect"
              name="Area"
              // onChange={(event) => {
              //   setRole(event.currentTarget.value);
              // }}
              required
            >
              <option></option>
              <option>Técnologia</option>
              <option>Ciencia</option>
              <option>Administración</option>
              <option>Cultura</option>
              <option>Medicina</option>
              <option>Otros</option>
            </select>
          </div>
        </div>
        <div className="form_lbl_input_groupe row">
          <div className="col-sm-6">
            <label htmlFor="TypeSelect">Tipo de proyecto:</label>
          </div>
          <div className="col-sm-6">
            <select
              type="text"
              className="form-select"
              id="TypeSelect"
              name="Type"
              // onChange={(event) => {
              //   setRole(event.currentTarget.value);
              // }}
              required
            >
              <option></option>
              <option>Técnologia</option>
              <option>Ciencia</option>
              <option>Administración</option>
              <option>Cultura</option>
              <option>Medicina</option>
              <option>Otros</option>
            </select>
          </div>
        </div>
        <div className="form_lbl_input_groupe row"> 
          <div className="col-sm-6">
            <label htmlFor="LineSelect">Línea de investigación:</label>
          </div>
          <div className="col-sm-6">
            <select
              type="text"
              className="form-select"
              id="LineSelect"
              name="Line"
              // onChange={(event) => {
              //   setRole(event.currentTarget.value);
              // }}
              required
            >
              <option></option>
              <option>Técnologia</option>
              <option>Ciencia</option>
              <option>Administración</option>
              <option>Cultura</option>
              <option>Medicina</option>
              <option>Otros</option>
            </select>
          </div>
        </div>
        <div className="form_lbl_input_groupe row">
          <div className="col-sm-6">
            <label>Nombre del proyecto:</label>
          </div>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              // onChange={(event) => {
              //   setName(event.currentTarget.value);
              // }}
              required
            />
          </div>
        </div>
        <div className="form_block">
          <div className="mb-3">
            <label htmlFor="descriptionIdeaTextarea" className="form-label">
              Descripción detallada de la idea:
            </label>
            <textarea
              className="form-control"
              id="descriptionIdeaTextarea"
              rows="3"
            ></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="comentIdeaTextarea" className="form-label">
              Observaciones o comentarios adicionales:
            </label>
            <textarea
              className="form-control"
              id="comentIdeaTextarea"
              rows="2"
            ></textarea>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="CheckTerminos"
            />
            <label className="form-check-label" htmlFor="CheckTerminos">
              Al presionar el botón "envíar", acepto inequívocamente todos los{" "}
              <a href="#">términos y condiciones</a> para la redicación del
              proyecto, en donde además comparte de forma explicita todos los
              derechos sobre la idea presentada con fines de investigación.
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterIdeaForm;
