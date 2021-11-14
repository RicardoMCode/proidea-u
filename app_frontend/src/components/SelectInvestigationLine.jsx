import React from "react";

const SelectInvestigationLine = (props) => {
  //Inicializo los valores posibles del select
  let lines = [];
  if (props.area !== "") {
    if (props.area == "Ciencias Agrarias, Ingeniería y Tecnología") {
      lines = [
        //Ciencias Agrarias, Ingeniería y Tecnología
        "Ingenierías",
        "Ciencias Agrarias",
        "Hábitat",
        "Tecnologías de la información y las comunicaciones",
        "Ingeniería de Procesos Industriales y Biotecnología",
      ];
    }
    if (props.area == "Ciencias Naturales") {
      lines = [
        //Ciencias Naturales
        "Ciencias Médicas",
        "Biología",
        "Química",
        "Veterinaria",
        "Matemáticas",
        "Física",
        "Astronomía",
      ];
    }
    if (props.area == "Ciencias Sociales") {
      lines = [
        //Ciencias Sociales
        "Derecho, Políticas y Relaciones Internacionales",
        "Filología, Lingüística y Literatura",
        "Filosofía, Psicología y Educación",
        "Historia, Antropología y Geografía",
        "Sociología y Demografía",
        "Economía y Administración",
      ];
    }
  }
  return (
    <>
      <div className="col-sm-6">
        <label htmlFor="LineSelect">Línea de investigación:</label>
      </div>
      <div className="col-sm-6">
        <select
          type="text"
          className="form-select"
          name="Line"
          onChange={(event) => {
            props.set(event.currentTarget.value);
          }}
          required
        >
          <option></option>
          {lines.map((line, index) => {
            return <option key={index}>{line}</option>;
          })}
        </select>
      </div>
    </>
  );
};

export default SelectInvestigationLine;
