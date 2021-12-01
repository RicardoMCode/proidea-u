import React from "react";

const AnalystButton = () => {
  return (
    <>
      <button
        type="button"
        className="home_session_button"
        onClick={()=>window.location.href = "/proponent-home"}
      >
        <span>Proponente</span>
      </button>
      <button
        type="button"
        className="home_session_button"
        onClick={()=>window.location.href = "/analyst-home"}
      >
        <span>Analista</span>
      </button>
    </>
  );
};

export default AnalystButton;
