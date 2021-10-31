import React from "react";

const AdminUsersModal = () => {
  return (
    <div className="modal fade" id="adminUsersModal">
      <div className="modal-dialog">
        <div className="modal-content modal-register">
          <div className="modal-header-center">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
            <br />
            <h4 className="modal-title text-center">
              Administración de usuarios
            </h4>
            <br />
          </div>
          <div className="modal-body form_lbl_input_groupe" autoComplete="off">
            <label>Buscar usuario:</label>
            <input
              type="number"
              className="form-control"
              id="identify"
              placeholder="####"
              name="identify"
              required
            />
          </div>
          <div className="col-sm d-grid gap-2">
            <button type="button" className="btn btn-primary btn">
              Buscar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUsersModal;
