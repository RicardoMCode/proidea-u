import React from 'react';
//Components and Containers
import HomeModule from '../containers/HomeModule';
import MenuProponent from '../containers/MenuProponent';
import RegisterIdeaModal from '../containers/RegisterIdeaModal';
import UpdateProponentDataModal from '../containers/UpdateProponentDataModal';
import RequestToAdminModal from '../containers/RequestToAdminModal';
import ExitButton from '../components/ExitButton';
//Context
import ProponentContext from '../context/ProponentContext';
import useProponentState from '../hooks/useProponentState';
//CSS
import '@styles/home.css';
import ImportantDates from '../containers/ImportantDates';
import CurrentUser from '../components/CurrentUser';


const ProponentHome = () => {
    const proponentState = useProponentState();
    return (
        <ProponentContext.Provider value={proponentState}>
            <div className="home row">
                <CurrentUser />
                <div className="col-sm-4 home_module"><HomeModule title ="Menú de opciones" moduleType ={<MenuProponent />} ></HomeModule></div>           
                <div className="col-sm-4 home_module"><HomeModule title ={proponentState.state.moduleName} moduleType ={<ImportantDates />} ></HomeModule></div>
                <div className="col-sm-4 home_module"><HomeModule title ="Fechas importantes" moduleType ={<ImportantDates />} ></HomeModule></div>

        </div>
        
        <RegisterIdeaModal />
        <RequestToAdminModal />
        <UpdateProponentDataModal />
        <ExitButton/>
        </ProponentContext.Provider>
    );
};

export default ProponentHome;
