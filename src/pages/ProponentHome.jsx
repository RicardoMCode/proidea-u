import React from 'react';
//Components and Containers
import HomeModule from '../containers/HomeModule';
import MenuProponent from '../containers/MenuProponent';
import RegisterIdeaModal from '../containers/RegisterIdeaModal';
//Context
import ProponentContext from '../context/ProponentContext';
import useProponentState from '../hooks/useProponentState';
//CSS
import '@styles/home.css';
import ImportantDates from '../containers/ImportantDates';
import UpdateProponentData from '../containers/UpdateProponentData';


const ProponentHome = () => {
    const proponentState = useProponentState();
    const user = "Nombre del Usuario";
    return (
        <ProponentContext.Provider value={proponentState}>
            <div className="home row">
                <label className="home_name"> Bienvenid@ - <span className="home_name_bold"> {user} </span> </label>
                <div className="col-sm-4 home_module"><HomeModule title ="Menú de opciones" moduleType ={<MenuProponent />} ></HomeModule></div>           
                <div className="col-sm-4 home_module"><HomeModule title ={proponentState.state.moduleName} moduleType ={<ImportantDates />} ></HomeModule></div>
                <div className="col-sm-4 home_module"><HomeModule title ="Fechas importantes" moduleType ={<ImportantDates />} ></HomeModule></div>

        </div>
        
        <RegisterIdeaModal />
        <UpdateProponentData />
        </ProponentContext.Provider>
    );
};

export default ProponentHome;
