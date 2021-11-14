import React, { useEffect } from "react";
//Coolkies
import Cookies from 'universal-cookie';
const cookies = new Cookies();
//Components and Containers
import HomeModule from "../containers/HomeModule";
import MenuProponent from "../containers/MenuProponent";
import RegisterIdeaModal from "../containers/RegisterIdeaModal";
import UpdateProponentDataModal from "../containers/UpdateProponentDataModal";
import RequestToAdminModal from "../containers/RequestToAdminModal";
import ExitButton from "../components/ExitButton";
//CSS
import "@styles/home.css";
import ImportantDates from "../containers/ImportantDates";
import CurrentUser from "../components/CurrentUser";

const ProponentHome = () => {
  useEffect (
    () => {
      if (!cookies.get('userEmail')) window.location.href = "/";
    },[]
  );
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
            moduleType={<ImportantDates />}
          ></HomeModule>
        </div>
        <div className="col-sm-4 home_module">
          <HomeModule
            title="Fechas importantes"
            moduleType={<ImportantDates />}
          ></HomeModule>
        </div>
      </div>
      <RegisterIdeaModal />
      <RequestToAdminModal />
      <UpdateProponentDataModal />
      <ExitButton />
    </>
  );
};

export default ProponentHome;
