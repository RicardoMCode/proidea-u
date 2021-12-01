import React, { useContext } from "react";
import InfoProject from "../components/InfoProject";
import ComentaryBox from "./ComentaryBox";
//Contexto de id proyecto
import ProjectContext from "../context/ProjectContext";
//Import CSS
import "@styles/modal.css";

const ViewProjectModal = () => {
  //Contexto para mostrar datos del proyecto
  const { id } = useContext(ProjectContext);
  return (
    <div className="modal fade" id="viewProyectModal">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header-center">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
            <br />
            <h4 className="modal-title text-center">
              Seguimiento a propuesta de investigación Nro {id}
            </h4>
            <br />
          </div>
          <InfoProject />
          <br />
          <ComentaryBox />
        </div>
      </div>
    </div>
  );
};

export default ViewProjectModal;
