import React from "react";
import RegisterIdeaForm from "../components/RegisterIdeaForm";
//Import CSS
import "@styles/modal.css";

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
        </div>
      </div>
    </div>
  );
};

export default RegisterIdeaModal;
