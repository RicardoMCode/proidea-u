import React, { useState } from "react";
//request to APi
import userRequest from "../requests/userRequest";
//Import CSS
import "@styles/form.css";
import LogoForForms from "./LogoForForms";
//Herramientas de gestion programadas
import userTools from "../tools/userTools";
//Cifrado de contraseña
const { cifrarPass, emailValidate } = userTools();

const PersonalDataForm = () => {
  //Creo los estados del formulario
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [typeId, setTypeId] = useState("");
  const [id, setId] = useState(0);
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [pass2, setPass2] = useState("");
  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");
  const [address, setAddress] = useState("");
  //Instanció request - modulo para las insersiones
  const { createUser } = userRequest();
  //Creamos un metodo para agregar usuario, se hacen las validaciones y la petición desde los modulos importados
  const addUserProponent = (e) => {
    //Valido correo electrónico
    if (emailValidate(mail)) {
      //Valido campos vacios
      if (
        role == "" ||
        name == "" ||
        typeId == "" ||
        id == "" ||
        mail == "" ||
        pass == "" ||
        phone1 == "" ||
        address == ""
      ) {
        alert("Debe registrar la información completa en el formulario");
      } else {
        //Var que valida si se crea o no el usuario
        let create = null;
        //Confirmamos la contraseña
        if (pass2 === pass) {
          create = createUser(
            role,
            name,
            typeId,
            id,
            mail,
            cifrarPass(pass),
            phone1,
            phone2,
            address
          );
          if (create === true) alert("Usuario proponente creado con éxito");
          else if (create === false)
            alert(
              "Usuario ya registrado, intentelo de nuevo o dirijase a la opción para recuperar cuenta"
            );
        } else {
          e.preventDefault();
          alert("Las contraseñas no coinciden");
        }
      }
    }
  };

  //COMPONENT
  return (
    <div>
      <form id="DataForm" className="modal-body" autoComplete="off">
        <div className="form_lbl_input_groupe row">
          <div className="col-sm-6">
            <label htmlFor="RolSelect">Rol:</label>
          </div>
          <div className="col-sm-6">
            <select
              type="text"
              className="form-select"
              id="RolSelect"
              name="Rol"
              onChange={(event) => {
                setRole(event.currentTarget.value);
              }}
              required
            >
              <option></option>
              <option>Estudiante</option>
              <option>Docente</option>
              <option>Administrativo</option>
              <option>Empresa</option>
              <option>Particular</option>
            </select>
          </div>
        </div>
        <div className="form_lbl_input_groupe row">
          <div className="col-sm-6">
            <label>Nombre completo:</label>
          </div>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              onChange={(event) => {
                setName(event.currentTarget.value);
              }}
              required
            />
          </div>
        </div>
        <div className="form_lbl_input_groupe row">
          <div className="col-sm-6">
            <label htmlFor="TypeIdSelect">Tipo de identificación:</label>
          </div>
          <div className="col-sm-6">
            <select
              type="text"
              className="form-select"
              id="TypeIdSelect"
              name="TypeId"
              required
              onChange={(event) => {
                setTypeId(event.currentTarget.value);
              }}
            >
              <option></option>
              <option>CC</option>
              <option>CE</option>
              <option>NIT</option>
            </select>
          </div>
        </div>
        <div className="form_lbl_input_groupe row">
          <div className="col-sm-6">
            <label>Número de identificación:</label>
          </div>
          <div className="col-sm-6">
            <input
              type="number"
              className="form-control"
              placeholder="CC/CE/NIT"
              onChange={(event) => {
                setId(event.currentTarget.value);
              }}
              required
            />
          </div>
        </div>
        <div className="form_lbl_input_groupe row">
          <div className="col-sm-6">
            <label>Correo electrónico:</label>
          </div>
          <div className="col-sm-6 ">
            <input
              type="email"
              className="form-control"
              placeholder="correo@ejemplo.com"
              onChange={(event) => {
                setMail(event.currentTarget.value);
              }}
              required
            />
          </div>
        </div>
        <div className="form_lbl_input_groupe row">
          <div className="col-sm-6">
            <label>Asigne una contraseña:</label>
          </div>
          <div className="col-sm-6">
            <input
              type="password"
              autoComplete="off"
              className="form-control"
              onChange={(event) => {
                setPass(event.currentTarget.value);
              }}
              placeholder="Contraseña"
              required
            />
          </div>
        </div>
        <div className="form_lbl_input_groupe row">
          <div className="col-sm-6">
            <label>Confirme contraseña:</label>
          </div>
          <div className="col-sm-6">
            <input
              type="password"
              autoComplete="off"
              className="form-control"
              onChange={(event) => {
                setPass2(event.currentTarget.value);
              }}
              placeholder="Confirme contraseña"
              required
            />
          </div>
        </div>
        <div className="form_lbl_input_groupe row">
          <div className="col-sm-6">
            <label>Celulares de contacto:</label>
          </div>
          <div className="col-sm-3">
            <label>Opción 1</label>
            <input
              type="number"
              className="form-control"
              min="0"
              onChange={(event) => {
                setPhone1(event.currentTarget.value);
              }}
              placeholder="########"
              required
            />
          </div>
          <div className="col-sm-3">
            <label>Opción 2</label>
            <input
              type="number"
              className="form-control"
              min="0"
              onChange={(event) => {
                setPhone2(event.currentTarget.value);
              }}
              placeholder="########"
            />
          </div>
        </div>
        <div className="form_lbl_input_groupe row">
          <div className="col-sm-6">
            <label>Dirección:</label>
          </div>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              onChange={(event) => {
                setAddress(event.currentTarget.value);
              }}
              placeholder="Indique su dirección"
              required
            />
          </div>
        </div>
        {/* Buttons */}
        <div className="row justify-content-around button-group">
          <div className="col-sm-6 form_combo_btn_content">
            <button
              type="summit"
              className="btn btn-primary item_combo_btn"
              form="DataForm"
              onClick={addUserProponent}
            >
              Enviar
            </button>
            <button
              type="button"
              className="btn btn-secondary item_combo_btn"
              data-bs-dismiss="modal"
            >
              Descartar
            </button>
          </div>
          <LogoForForms />
        </div>
      </form>
    </div>
  );
};

export default PersonalDataForm;
