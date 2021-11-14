import React, { useEffect, useState } from "react";
import LogoU from "../components/LogoU";
//Coolkies
import Cookies from 'universal-cookie';
const cookies = new Cookies();
//Para peticiones a la Api
import Axios from "axios";
//Herramientas de gestion programadas
import userTools from "../tools/userTools";
//Cifrado de contraseña
const { cifrarPass } = userTools();
//HTTP Request 
const BaseUrl = "http://localhost:3001/api/v1/proponents/";
//Import CSS
import "@styles/form.css";

const LoginForm = () => {
  //Valido que el usuario no venga desde el interior de la app si es así borro las cookies
  useEffect (
    () => {
      if (cookies.get('userEmail')) {
        cookies.remove('userName', {path:"/"});
        cookies.remove('userId', {path:"/"});
        cookies.remove('userEmail', {path:"/"});
      };
    },[]
    );
  //Creo el estado del login
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
 //Metodo GET que consulta el usuario en la capa API del back
 const validatedUser = async e => {
  if(mail != "" && pass != "")
  {
    e.preventDefault();
    await Axios.get(BaseUrl+"/"+mail.toLowerCase()+"/"+ cifrarPass(pass))
    .then((response) => {
      return response.data[0];
    })
    .then((response) => {
      const lengthResponse = Object.keys(response).length;
      if (lengthResponse > 0) {
        e.preventDefault();
        const userName = response.user_name;
        const userEmail = response.user_mail;
        const userId = response.user_id;
        cookies.set('userName', userName, {path:"/"});
        cookies.set('userId', userId, {path:"/"});
        cookies.set('userEmail', userEmail, {path:"/"});
        window.location.href = "/proponent-home/";
        }
    })
    .catch(err => {
      alert("Credenciales no validas, intente nuevamente o registrese para tener acceso a la aplicación"); 
    });
  }
};
//Render
  return (
    <div className="card text-center container" id="LoginForm">
      <div className="card-body">
        <h4 className="card-title">Ingreso al sistema</h4>
        <hr />
        <form>
          <div className="form_lbl_inpt_groupe">
            <input
              type="email"
              className="form-control"
              placeholder="Correo"
              name="email"
              required
              onChange={(event) => {
                setMail(event.currentTarget.value);
              }}
            />
          </div>
          <div className="form_lbl_input_groupe">
            <input
              type="password"
              className="form-control"
              placeholder="Contraseña"
              name="pwd"
              required
              onChange={(event) => {
                setPass(event.currentTarget.value);
              }}
            />
          </div>
          <div className="col-sm d-grid gap-2">
            <button
              type="summit"
              className="btn btn-success btn-sm "
              onClick={validatedUser}
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
          <br />
          <a
            href="#"
            data-bs-toggle="modal"
            //Call to recovery modal container
            data-bs-target="#recoveryPassModal"
          >
            ¿Olvidaste tu contraseña?
          </a>
          <br />
        </form>
        <LogoU />
      </div>
    </div>
  );
};

export default LoginForm;