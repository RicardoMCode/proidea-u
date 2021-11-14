import React, { useState} from "react";
//Coolkies
import Cookies from 'universal-cookie';
const cookies = new Cookies();
//request to APi
import projectRequest from "../requests/projectRequest";
//Import CSS
import "@styles/form.css";
import LogoForForms from "./LogoForForms";
import SelectInvestigationLine from "./SelectInvestigationLine";

const RegisterIdeaForm = () => {
  let create = null;
  //Creo los estados del formulario
  const [area, setArea] = useState("");
  const [type, setType] = useState("");
  const [line, setLine] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [obs, setObs] = useState("");
  const [chek, setChek] = useState("");
  //Instanció request - modulo para las insersiones
  const { createProject } = projectRequest();
  //Creamos un metodo para agregar el proyecto, se hacen las validaciones y la petición desde los modulos importados
  const addProject = (e) => {
    //Valido campos vacios
    if(area == "" || type == "" || line == "" || name == "" || description == "" || obs == "") {
      alert("Debe registrar la información completa en el formulario");
    }
    else {
      //1=chek 0=NO chek
      if(chek==1) {
        const time = Date.now();
        const date = new Date(time);
        const today = date.toLocaleDateString();
        const status = "Nuevo";
        const id_user = cookies.get('userId');
        create = createProject(name, area, type, line, description, obs, today, status, id_user);
        if (create === true)
          alert("Propuesta creada con éxito")
        else if (create === false) {
          e.preventDefault();
          alert("La información registrada no pudo ser almacenada, valide cada uno de los campos");
        }
      }
      else{
        e.preventDefault();
        alert("Debe aceptar los términos y condiciones para poder continuar con el proceso");
      }  
    }
  }
  //COMPONENT
  return (
    <div>
      <form id="IdeaForm" className="modal-body" autoComplete="off">
        <div className="form_lbl_input_groupe row">
          <div className="col-sm-6">
            <label htmlFor="AreaSelect">Área de investigación:</label>
          </div>
          <div className="col-sm-6">
            <select
              type="text"
              className="form-select"
              id="AreaSelect"
              name="Area"
              onChange={(event) => {
                setArea(event.currentTarget.value);
              }}
              required
            >
              <option></option>  
              <option>Ciencias Agrarias, Ingeniería y Tecnología</option>
              <option>Ciencias Naturales</option>
              <option>Ciencias Sociales</option>
            </select>
          </div>
        </div>
        <div className="form_lbl_input_groupe row"> 
        {/* Renderizo la línea de investigación de acuerdo al área seleccionada */}
          <SelectInvestigationLine set={setLine} area={area}
          required />
          
        </div>
        <div className="form_lbl_input_groupe row">
          <div className="col-sm-6">
            <label htmlFor="TypeSelect">Tipo de proyecto:</label>
          </div>
          <div className="col-sm-6">
            <select
              type="text"
              className="form-select"
              name="Type"
              onChange={(event) => {
                setType(event.currentTarget.value);
              }}
              required
            >
              <option></option>
              <option>Investigación</option>
              <option>Monografía</option>
              <option>Desarrollo de nuevas tecnologías</option>
            </select>
          </div>
        </div>
        <div className="form_lbl_input_groupe row">
          <div className="col-sm-6">
            <label>Nombre del proyecto:</label>
          </div>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={(event) => {
                setName(event.currentTarget.value);
              }}
              required
            />
          </div>
        </div>
        <div className="form_block">
          <div className="mb-3">
            <label htmlFor="descriptionIdeaTextarea" className="form-label">
              Descripción detallada de la idea:
            </label>
            <textarea
              className="form-control"
              name="description"
              rows="3"
              onChange={(event) => {
                setDescription(event.currentTarget.value);
              }}
              required
            ></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="comentIdeaTextarea" className="form-label">
              Observaciones o comentarios adicionales:
            </label>
            <textarea
              className="form-control"
              name="observations"
              rows="2"
              onChange={(event) => {
                setObs(event.currentTarget.value);
              }}
            ></textarea>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="false"
              name="CheckTerminos"
              onChange={() => {
                //0=chek 1=NO chek
                if(chek==1)
                  setChek(0);
                else
                  setChek(1);
              }}
            />
            <label className="form-check-label" htmlFor="CheckTerminos">
              Al presionar el botón "envíar", acepto todos los{" "}
              <a href="#">términos y condiciones</a> para la radicación del
              proyecto, en donde además comparto de forma explicita todos los
              derechos sobre la idea presentada con fines de investigación.
            </label>
          </div>
          
          {/* Buttons            */}
          <div className="row justify-content-around button-group">
            <div className="col-sm-6 form_combo_btn_content">
              <button
                type="summit"
                className="btn btn-primary item_combo_btn"
                form="IdeaForm"
                onClick={addProject}
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
        </div>
      </form>
    </div>
  );
};

export default RegisterIdeaForm;
