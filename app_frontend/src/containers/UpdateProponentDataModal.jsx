import React from 'react';
import LogoForForms from '../components/LogoForForms';
import PersonalDataForm from '../components/PersonalDataForm';

const UpdateProponentDataModal = () => {
    return (
      // This modal is activated from the register botton on the login page
      <div className="modal fade" id="UpdateProponentModal">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header-center">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
              <br />
              <h4 className="modal-title text-center">Formulario de actualización de datos</h4>
              <br />
            </div>
            <PersonalDataForm />
          </div>
        </div>
      </div>
    );
  };

export default UpdateProponentDataModal;