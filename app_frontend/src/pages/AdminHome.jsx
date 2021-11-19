import React from "react";
//Components and Containers
import HomeModule from "../containers/HomeModule";
import ImportantDates from "../containers/ImportantDates";
import CurrentUser from "../components/CurrentUser";
import MenuAdmin from "../containers/MenuAdmin";
import AdminDatesModal from "../containers/AdminDatesModal";
import AdminUsersModal from "../containers/AdminUsersModal";
import AdminProyectsModal from "../containers/AdminProyectsModal";
import SessionButtons from "../components/SessionButtons";
//CSS
import "@styles/home.css";

const AdminHome = () => {
  return (
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
      <AdminDatesModal />
      <AdminUsersModal />
      <AdminProyectsModal />
      <SessionButtons />
    </div>
  );
};

export default AdminHome;
