import React from "react";
import Logo_for_forms from "../components/Logo_for_forms";
import Personal_data_form from "../components/Personal_data_form";
//Import CSS
import "@styles/modal.css";

const Register = () => {
  return (
    // This modal is activated from the register botton on the login page
    <div className="RegisterModule">
      <div className="modal fade" id="registerModal">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header-center">
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
              <br />
              <h4 className="modal-title text-center">
                Formulario de registro
              </h4>
              <br />
            </div>
            <Personal_data_form /> 
            {/* Buttons            */}
            <div className="row justify-content-around button-group">
                <div className="col-sm-6 form_combo_btn_content">
                  <button
                    type="submit"
                    className="btn btn-primary form_combo_btn"
                    // onClick={addUserProp}
                  >
                    Registrarse
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary form_combo_btn"
                    data-dismiss="modal"
                  >
                    Cancelar
                  </button>
                </div>
                <Logo_for_forms />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
