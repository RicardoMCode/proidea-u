import React from "react";
//Import CSS
import "@styles/form.css";

const RequesToAdminForm = () => {
  return (
    <div>
      <form id="RequestForm" className="modal-body">
        <div className="form_lbl_input_groupe row">
          <div className="col-sm-6">
            <label htmlFor="typeRequestSelect">Tipo de solicitud:</label>
          </div>
          <div className="col-sm-6">
            <select
              type="text"
              className="form-select"
              id="typeRequestSelect"
              name="typeRequest"
              // onChange={(event) => {
              //   setRole(event.currentTarget.value);
              // }}
              required
            >
              <option></option>
              <option>Actualización de calendario</option>
              <option>Solicitud de revisión estado</option>
              <option>Novedad con el usuario</option>
              <option>Problemas con la app</option>
              <option>Otros</option>
            </select>
          </div>
        </div>

        <div className="form_block">
          <div className="mb-3">
            <label htmlFor="descriptiotRequestTextarea" className="form-label">
              Descripción detallada de la solicitud:
            </label>
            <textarea
              className="form-control"
              id="descriptiotRequestTextarea"
              rows="2"
            ></textarea>
          </div>
          
        <p>
          Su solicitud generará un correo electrónico al administrador con copia
          a la dirección de correo electrónico que indicó en su registro, en
          caso de que su dirección de correo haya cambiado lo invitamod a que
          actualice sus datos personales.
        </p>
        </div>
        <br />
      </form>
    </div>
  );
};

export default RequesToAdminForm;
