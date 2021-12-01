import React from 'react';
//Import CSS
import '@styles/footer.css';
const a = "";
const Footer = () => {
  return (
      <footer className="footer text-center">
        {/* Copyright */}
        <div
          className="text-center p-3 mt-4"
        >
        <span> © 2021 Copyleft:
          <span className = "fw-bolder"> NRMV </span>
          - Todos los derechos reservados
        </span>
        </div>
      </footer>
  );
};

export default Footer;
