import React from "react";
import LogoForForms from "../components/LogoForForms";
import RegisterIdeaForm from "../components/RegisterIdeaForm";
//Import CSS
import "@styles/modal.css";
import "@styles/form.css";

const RegisterIdeaModal = () => {
  return (
    <div className="modal fade" id="registerIdeaModal">
      <div className="modal-dialog modal-lg">
        <div className="modal-content modal-register">
          <div className="modal-header-center">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
            <br />
            <h4 className="modal-title text-center">Formulario de registro de idea</h4>
            <br />
          </div>
          <RegisterIdeaForm />
          {/* Buttons            */}
          <div className="row justify-content-around button-group">
            <div className="col-sm-6 form_combo_btn_content">
              <button
                type="submit"
                className="btn btn-primary item_combo_btn"
                form="DataForm"
              >
                Enviar
              </button>
              <button
                type="button"
                className="btn btn-secondary item_combo_btn"
                data-bs-dismiss="modal"
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

export default RegisterIdeaModal;
