import React from "react";
import CurrentUser from "../components/CurrentUser";
import ExitButton from "../components/ExitButton";
import MenuAnalist from "../containers/MenuProponent"
//Context
import UserContext from "../context/UserContext";
import useUserState from "../hooks/useUserState";
//CSS
import "@styles/home.css";
import ProyectsList from "../containers/ProyectsList";

const AnalistHome = () => {
  const userState = useUserState();
  return (
    <UserContext.Provider value={userState}>
      <div className="row home_analist">
        <CurrentUser />
        <div className=" col-sm-3 home_menu_analist_content">
            {/* <MenuAnalist /> */}
        </div>
        <div className="col-sm-8 home_list_content">
            <ProyectsList />
        </div>
      </div>
    <ExitButton />
    </UserContext.Provider>
  );
};

export default AnalistHome;
