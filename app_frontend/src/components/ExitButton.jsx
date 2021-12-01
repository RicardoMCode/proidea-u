import React from "react";
//Coolkies - para el cierre de la sesión 
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const ExitButton = () => {
  const closeSession = () => {
    cookies.remove('currentUser', {path:"/"});
    cookies.remove('currentDate', {path:"/"});
    window.location.href = "/";
  }
  return (
    <>
      <button
        type="button"
        className="home_exit_button"
        onClick={closeSession}
      >
          <span>
              Salir
          </span>
        
      </button>
    </>
  );
};

export default ExitButton;
