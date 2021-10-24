import React , {useRef} from 'react';
//Import CSS
import '@styles/form.css';
import LogoU from '../components/LogoU';

const LoginForm = () => {
  const form = useRef(null);

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const data = {
      usename: formData.get('email'),
      usepass: formData.get('pwd')
    }
    console.log(data);
  }

  return (
    <div className="card text-center container" id="LoginForm">
      <div className="card-body">
        <h4 className="card-title">Ingreso al sistema</h4>
        <hr />
        <form ref={form} >
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
              name="pwd"
              required
            />
          </div>
          <div className="col-sm d-grid gap-2">
            <button
              type="submit"
              className="btn btn-success btn-sm "
              onClick={handleSubmit}
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
