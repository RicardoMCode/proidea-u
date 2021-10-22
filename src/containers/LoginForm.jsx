import React from 'react';
//Import CSS
import '@styles/form.css';
import LogoU from '../components/LogoU';

const LoginForm = () => {
  return (
    <div className="card text-center container">
      <div className="card-body">
        <h4 className="card-title">Ingreso al sistema</h4>
        <hr />
        <form>
          <div className="form_lbl_inpt_groupe">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Correo"
              name="email"
              required
            />
          </div>
          <div className="form_lbl_input_groupe">
            <input
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Contraseña"
              name="pswd"
              required
            />
          </div>
          <div className="col-sm d-grid gap-2">
            <button
              //href="view_proponent.html"
              type="button"
              className="btn btn-success btn-sm "
            >
              Ingresar
            </button>
            <button
              type="button"
              className="btn btn-primary btn-sm "
              data-bs-toggle="modal"
              //Call to register modal container
              data-bs-target="#registerModal"
            >
              Registrate aquí
            </button>
          </div>
          <br/>
          <a href="#"
              data-bs-toggle="modal"
              //Call to recovery modal container
              data-bs-target="#recoveryPassModal">¿Olvidaste tu contraseña?</a>
          <br/>
        </form>
        <LogoU />
      </div>
    </div>
  );
};

export default LoginForm;
