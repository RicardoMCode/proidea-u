import React from 'react';
//Components and Containers
import HomeModule from '../containers/HomeModule';
import MenuProponent from '../containers/MenuProponent';
//Context
import ProponentContext from '../context/ProponentContext';
import useProponentState from '../hooks/useProponentState';
//CSS
import '@styles/home.css';


const ProponentHome = () => {
    const proponentState = useProponentState();
    const user = "Nombre del Usuario";
    return (
        <ProponentContext.Provider value={proponentState}>
            <div className="home row">
                <label className="home_name"> Bienvenid@ - <span className="home_name_bold"> {user} </span> </label>
                <div className="col-sm-4 home_module"><HomeModule title ="Menú de opciones" moduleType ={<MenuProponent />} ></HomeModule></div>           
                <div className="col-sm-4 home_module"><HomeModule title ={proponentState.state.moduleName} moduleType ={<proponentState.state.moduleType />} ></HomeModule></div>
                <div className="col-sm-4 home_module"><HomeModule title ="Fechas importantes" moduleType ={<MenuProponent />} ></HomeModule></div>

        </div>
        </ProponentContext.Provider>
    );
};

export default ProponentHome;
