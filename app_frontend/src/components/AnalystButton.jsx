import React from "react";

const AnalystButton = () => {
  return (
    <>
      <button
        type="button"
        className="home_session_button"
        onClick={()=>window.location.href = "/proponent-home"}
      >
        <span>Proponent</span>
      </button>
      <button
        type="button"
        className="home_session_button"
        onClick={()=>window.location.href = "/analyst-home"}
      >
        <span>Analyst</span>
      </button>
    </>
  );
};

export default AnalystButton;
