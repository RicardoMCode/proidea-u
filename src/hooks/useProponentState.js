import React, { useState } from "react";
import MenuProponent from '../containers/MenuProponent';

const proponentState = {
    moduleType: MenuProponent ,
    moduleName: "Esto se cambia en Hooks->useProponentState" ,
    userName: "Nombre del Usuario desde el Hook",
}

const useProponentState = () => {
    const [state, setState] = useState(proponentState);

    const addToModule = (module, name) => {
        setState({
            moduleType: module,
            moduleName: name
        });
    };

    return {
        state,
        addToModule,    
    }
}

export default useProponentState;