import React from 'react';

const AdminDatesModal = () => {
    return (
        <div className="modal fade" id="adminDatesModal">
        <div className="modal-dialog">
          <div className="modal-content modal-register">
            <div className="modal-header-center">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
              <br />
              <h4 className="modal-title text-center">Administración de fechas</h4>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
};

export default AdminDatesModal;