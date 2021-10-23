import React from 'react';
import logo  from '@logos/logo.png';
import '@styles/form.css';

const LogoForForms = () => {
    return (
        <div className="col-sm-6 form_logo_content">
            <img className="form_logo_style" src={logo} alt="Logo" />
        </div>
    );
};

export default LogoForForms;