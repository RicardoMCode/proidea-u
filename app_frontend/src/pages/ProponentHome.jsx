import React, { useEffect } from "react";
//Coolkies de sesión
import Cookies from 'universal-cookie';
const cookies = new Cookies();
//Components and Containers
import HomeModule from "../containers/HomeModule";
import MenuProponent from "../containers/MenuProponent";
import RegisterIdeaModal from "../containers/RegisterIdeaModal";
import UpdateProponentDataModal from "../containers/UpdateProponentDataModal";
import RequestToAdminModal from "../containers/RequestToAdminModal";
import ImportantDates from "../containers/ImportantDates";
import CurrentUser from "../components/CurrentUser";
import ProjectsList from "../containers/ProjectsList";
import SessionButtons from "../components/SessionButtons";
//CSS
import "@styles/home.css";

const ProponentHome = () => {
  //Valido que el usuario esté logeado
  if (cookies.get('session')=="false") window.location.href = "/";
  else 
  {
  return (
    <>
      <div className="home row">
        <CurrentUser />
        <div className="col-sm-4 home_module">
          <HomeModule
            title="Menú de opciones"
            moduleType={<MenuProponent />}
          ></HomeModule>
        </div>
        <div className="col-sm-4 home_module">
          <HomeModule
            title="Ideas presentadas"
            moduleType={<ProjectsList type="proponent" proponent={cookies.get('currentUser').user_id}/>}
          ></HomeModule>
        </div>
        <div className="col-sm-4 home_module">
          <HomeModule
            title="Fechas importantes"
            moduleType={<ImportantDates />}
          ></HomeModule>
        </div>
      <SessionButtons />
      </div>
      <RegisterIdeaModal />
      <RequestToAdminModal />
      <UpdateProponentDataModal />
    </>
  );
}
};

export default ProponentHome;
