import React from "react";
//Import CSS
import "@styles/modal.css";
import "@styles/form.css";

const RecoveryPass = () => {
  return (
    <div className="modal fade" id="recoveryPassModal">
      <div className="modal-dialog">
        <div className="modal-content modal-register">
          <div className="modal-header-center">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
            <br />
            <h4 className="modal-title text-center">Recuperar contraseña</h4>
            <br />
          </div>
          <form className="modal-recovery">
            <p>Indique la dirección de correo electrónico registrada en la aplicación, se le enviará un correo electrónico con una contraseña temporal.</p>
            <div className="modal-body form_lbl_input_groupe" autoComplete="off">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Correo"
                name="email"
                required
              />
            </div>
            <div className="col-sm d-grid gap-2">
              <button
                type="button"
                className="btn btn-primary btn"
                //Call recovery method
              >
                Recuperar contraseña
              </button>
            </div>
            <br />
          </form>
        </div>
      </div>
    </div>
  );
};

export default RecoveryPass;
