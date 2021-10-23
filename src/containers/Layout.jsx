import React from 'react';
// Este es el contenedor principar que recibirá contenedores hijos, esto se declara dentro de la extructura JSX
const Layout = ({ children }) => {
    return (
        <div className = "Layout">
            {children}
        </div>
    );
};

export default Layout;