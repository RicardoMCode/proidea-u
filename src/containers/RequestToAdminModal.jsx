import React from "react";
//Import CSS
import "@styles/modal.css";
import "@styles/form.css";
import RequesToAdminForm from "../components/RequesToAdminForm";
import LogoForForms from "../components/LogoForForms";

const RequestToAdminModal = () => {
  return (
    <div className="modal fade" id="requestToAdminModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header-center">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
            <br />
            <h4 className="modal-title text-center">Crear solicitud</h4>
            <br />
          </div>
          < RequesToAdminForm />
          {/* Buttons            */}
          <div className="row justify-content-around button-group">
            <div className="col-sm-6 form_combo_btn_content">
              <button
                type="submit"
                className="btn btn-primary item_combo_btn"
                form="RequestForm"
              >
                Enviar
              </button>
              <button
                type="button"
                className="btn btn-secondary item_combo_btn"
                data-bs-dismiss="modal"
                form="RequestForm"
              >
                Descartar
              </button>
            </div>
            <LogoForForms />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestToAdminModal;
