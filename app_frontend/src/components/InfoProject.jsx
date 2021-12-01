import React, { useContext } from "react";
//Contexto de id proyecto
import ProjectContext from "../context/ProjectContext";

const InfoProject = () => {
  //Contexto para recibir los datos del proyecto seleccionado
  const { id, area, linea, type, name, description, obs, startDay, status } =
    useContext(ProjectContext);

  return (
    <div className="info_group">
      <div className="form_lbl_lbl_groupe row">
        <div className="col-sm-4">
          <label className="InfoProject_Info_title">
            Área de investigación:
          </label>
        </div>
        <div className="col-sm-8">
          <label>{area}</label>
        </div>
      </div>
      <div className="form_lbl_lbl_groupe row">
        <div className="col-sm-4">
          <label className="InfoProject_Info_title">
            Linea de investigación:
          </label>
        </div>
        <div className="col-sm-8">
          <label>{linea}</label>
        </div>
      </div>
      <div className="form_lbl_lbl_groupe row">
        <div className="col-sm-4">
          <label className="InfoProject_Info_title">Tipo de proyecto:</label>
        </div>
        <div className="col-sm-8">
          <label>{type}</label>
        </div>
      </div>
      <div className="form_lbl_lbl_groupe row">
        <div className="col-sm-4">
          <label className="InfoProject_Info_title">Nombre del proyecto:</label>
        </div>
        <div className="col-sm-8">
          <label>{name}</label>
        </div>
      </div>
      <div className="form_lbl_lbl_groupe row">
        <div className="col-sm-4">
          <label className="InfoProject_Info_title">Fecha de registro:</label>
        </div>
        <div className="col-sm-8">
          <label>{startDay}</label>
        </div>
      </div>
      <div className="form_lbl_lbl_groupe row">
        <div className="col-sm-4">
          <label className="InfoProject_Info_title">Estado:</label>
        </div>
        <div className="col-sm-8">
          <label>{status}</label>
        </div>
      </div>
      <div>
        <div className="form_lbl_lbl_groupe">
          <div className="InfoProject_textArea">
            <label className="InfoProject_Info_title">
              Descripción de la idea:
            </label>
            <br />
            <label>{description}</label>
          </div>
        </div>
        <div className="form_lbl_lbl_groupe">
          <div className="InfoProject_textArea">
            <label className="InfoProject_Info_title">
              Observaciones adicionales:
            </label>
            <br />
            <label>{obs}</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoProject;
