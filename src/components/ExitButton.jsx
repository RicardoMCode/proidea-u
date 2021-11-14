import React from "react";
//Coolkies - para el cierre de la sesión 
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const ExitButton = () => {
  const closeSession = () => {
    cookies.remove('userName', {path:"/"});
    cookies.remove('userId', {path:"/"});
    cookies.remove('userEmail', {path:"/"});
    window.location.href = "/";
  }
  return (
    <div className="home_exit">
      <button
        type="button"
        className="home_exit_button"
        onClick={closeSession}
      >
          <span>
              Salir
          </span>
        
      </button>
    </div>
  );
};

export default ExitButton;
