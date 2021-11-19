import React from 'react';

const AdminButton = () => {
    return (
        <>
          <button
            type="button"
            className="home_session_button"
            onClick={()=>window.location.href = "/admin-home"}
          >
              <span>
                  Admin
              </span>
            
          </button>
        </>
    );
};

export default AdminButton;