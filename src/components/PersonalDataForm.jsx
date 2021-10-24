import React from 'react';
//Import CSS
import '@styles/form.css';
const PersonalDataForm = () => {
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
              // onChange={(event) => {
              //   setRole(event.currentTarget.value);
              // }}
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
              // onChange={(event) => {
              //   setName(event.currentTarget.value);
              // }}
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
              // onChange={(event) => {
              //   setTypeId(event.currentTarget.value);
              // }}
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
              // onChange={(event) => {
              //   setId(event.currentTarget.value);
              // }}
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
              // onChange={(event) => {
              //   setMail(event.currentTarget.value);
              // }}
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
              // onChange={(event) => {
              //   setPass(event.currentTarget.value);
              // }}
              placeholder="Contraseña"
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
              // onChange={(event) => {
              //   setPhone1(event.currentTarget.value);
              // }}
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
              // onChange={(event) => {
              //   setPhone2(event.currentTarget.value);
              // }}
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
              // onChange={(event) => {
              //   setAddress(event.currentTarget.value);
              // }}
              placeholder="Indique su dirección"
              required
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default PersonalDataForm;
