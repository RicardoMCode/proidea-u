import React, { useEffect } from "react";
import CurrentUser from "../components/CurrentUser";
import ProjectsList from "../containers/ProjectsList";
import MenuAnalyst from "../containers/MenuProponent";
import SessionButtons from "../components/SessionButtons";
//Coolkies de sesión
import Cookies from "universal-cookie";
const cookies = new Cookies();
//CSS
import "@styles/home.css";

const AnalystHome = () => {
  const userType = cookies.get("userType");
  //Valido usuario analista
  useEffect(() => {
    if (userType !== "useranalyst")
      if (userType !== "useradmin") {window.location.href = "/proponent-home"; alert("Acceso denegado");}
  }, []);
  return (
    <div className="row home_analist">
      <CurrentUser />
      <div className=" col-sm-3 home_menu_analist_content">
        {/* <MenuAnalyst /> */}
      </div>
      <div className="col-sm-8 home_list_content">
        <ProjectsList type="analyst" proponent={false} />
      </div>
      <SessionButtons />
    </div>
  );
};

export default AnalystHome;
