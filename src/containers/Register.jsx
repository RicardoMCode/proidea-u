import React from "react";
import LogoForForms from "../components/LogoForForms";
import PersonalDataForm from "../components/PersonalDataForm";
//Import CSS
import "@styles/modal.css";
import "@styles/form.css";

const Register = () => {
  return (
    // This modal is activated from the register botton on the login page
    <div className="modal fade" id="registerModal">
      <div className="modal-dialog modal-lg">
        <div className="modal-content modal-register">
          <div className="modal-header-center">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
            <br />
            <h4 className="modal-title text-center">Formulario de registro</h4>
            <br />
          </div>
          <PersonalDataForm />
          {/* Buttons            */}
          <div className="row justify-content-around button-group">
            <div className="col-sm-6 form_combo_btn_content">
              <button
                type="submit"
                className="btn btn-primary item_combo_btn"
                form="DataForm"
              >
                Registrarse
              </button>
              <button
                type="button"
                className="btn btn-secondary item_combo_btn"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
            </div>
            <LogoForForms />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
