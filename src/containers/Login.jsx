import React from "react";

const Login = () => {
  return (
    <div className="card text-center">
      <div className="card-body">
        <h4 className="card-title">Ingreso al sistema</h4>
        <hr />
        <form>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Correo"
              name="email"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Contraseña"
              name="pswd"
              required
            />
          </div>
          <div className="btn btn-block">
            <button
              //href="view_proponent.html"
              type="button"
              className="btn btn-success btn-sm btn-block"
            >
              Ingresar
            </button>
          </div>
          <div className="btn btn-block mt-0">
            <button
              type="button"
              className="btn btn-primary btn-sm btn-block"
              data-bs-toggle="modal"
              data-bs-target="#registerModal"
            >
              Registrate aquí
            </button>
          </div>
          <br />
          <a href="#titulo">¿Olvidaste tu contraseña?</a>
        </form>
          {/* <img className="card-img-bottom" src={logoU}  alt="Logo Universidad" style={{width:"80%", margin:"auto", marginBottom:"5%"}}/> */}
      </div>
    </div>
  );
};

export default Login;
