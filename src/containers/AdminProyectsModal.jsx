import React from "react";

const AdminProyectsModal = () => {
  return (
    <div className="modal fade" id="adminProyectsModal">
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
              Eliminar proyecto o lista
            </h4>
            <br />
          </div>
          <div
              className="modal-body form_lbl_input_groupe"
              autoComplete="off"
            >
              <label>Nro de proyecto:</label>
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
              <button type="button" className="btn btn-danger btn">
                Eliminar
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProyectsModal;
