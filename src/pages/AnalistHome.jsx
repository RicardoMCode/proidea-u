import React from "react";
import CurrentUser from "../components/CurrentUser";
import ExitButton from "../components/ExitButton";
import MenuAnalist from "../containers/MenuProponent";
//CSS
import "@styles/home.css";
import ProyectsList from "../containers/ProyectsList";
import ViewProjectModal from "../containers/ViewProjectModal";

const AnalistHome = () => {
  return (
    <div className="row home_analist">
      <CurrentUser />
      <div className=" col-sm-3 home_menu_analist_content">
        {/* <MenuAnalist /> */}
      </div>
      <div className="col-sm-8 home_list_content">
        <ProyectsList />
      </div>
      <ViewProjectModal />
      <ExitButton />
    </div>
  );
};

export default AnalistHome;
