import React from "react";
//Components and Containers
import HomeModule from "../containers/HomeModule";
import ExitButton from "../components/ExitButton";
import ImportantDates from "../containers/ImportantDates";
import CurrentUser from "../components/CurrentUser";
import MenuAdmin from "../containers/MenuAdmin";    
import AdminDatesModal from "../containers/AdminDatesModal"
import AdminUsersModal from "../containers/AdminUsersModal";
import AdminProyectsModal from "../containers/AdminProyectsModal";
//Context
import UserContext from "../context/UserContext";
import useUserState from "../hooks/useUserState";
//CSS
import "@styles/home.css";

const AdminHome = () => {
    const userState = useUserState();
    return (
      <UserContext.Provider value={userState}>
        <div className="home row">
          <CurrentUser />
          <div className="col-sm-6 home_module">
            <HomeModule
              title="Menú de opciones"
              moduleType={<MenuAdmin />}
            ></HomeModule>
          </div>
          <div className="col-sm-6 home_module">
            <HomeModule
              title="Fechas importantes"
              moduleType={<ImportantDates />}
            ></HomeModule>
          </div>
        </div>
        <AdminDatesModal />
        <AdminUsersModal />
        <AdminProyectsModal />
        <ExitButton />
      </UserContext.Provider>
    );
};

export default AdminHome;