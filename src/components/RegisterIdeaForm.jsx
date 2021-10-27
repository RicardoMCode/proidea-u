import React from 'react';

const RegisterIdeaForm = () => {
    return (
        <div>
            Formulario registro idea
            <input
              type="text"
              className="form-control"
              id="ejemplo"
              placeholder="Ejemplo"
              name="ejemplo"
              required
            />
        </div>
    );
};

export default RegisterIdeaForm;