import React, { useEffect } from "react";
//Components and Containers
import HomeModule from "../containers/HomeModule";
import ImportantDates from "../containers/ImportantDates";
import CurrentUser from "../components/CurrentUser";
import MenuAdmin from "../containers/MenuAdmin";
import AdminDatesModal from "../containers/AdminDatesModal";
import AdminUsersModal from "../containers/AdminUsersModal";
import AdminProyectsModal from "../containers/AdminProyectsModal";
import SessionButtons from "../components/SessionButtons";
//Coolkies de sesión
import Cookies from 'universal-cookie';
const cookies = new Cookies();
//CSS
import "@styles/home.css";

const AdminHome = () => {
  const userType = cookies.get("userType");
  //Valido usuario analista
  useEffect(() => {
    if (userType !== "useradmin") {window.location.href = "/proponent-home"; alert("Acceso denegado");}
  });
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
