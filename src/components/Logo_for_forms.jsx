import React from 'react';
import logo  from "@logos/logo.png";

const Logo_for_forms = () => {
    return (
        <div className="col-sm-6 form_logo_content">
            <img className="form_logo_style" src={logo} alt="Logo" />
        </div>
    );
};

export default Logo_for_forms;