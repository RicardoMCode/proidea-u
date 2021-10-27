import React, { useContext } from 'react';
import ProponentContext from '../context/ProponentContext';
import ProponentTable from '../components/RegisterIdeaForm';


const MenuProponent = () => {
    const {addToModule, state} = useContext(ProponentContext);

    const handleClick = () => {
        addToModule(ProponentTable, "Formulario de registro de idea ");
    }
    return (
        <div>
            Prueba - Menú prop
            
            <button
              type="button"
              className="btn btn-success btn-sm "
              onClick={handleClick}
            >
              Proponer proy
            </button>

        </div>
    );
};

export default MenuProponent;