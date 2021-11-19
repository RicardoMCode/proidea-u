import React from "react";
import CurrentUser from "../components/CurrentUser";
import ProjectsList from "../containers/ProjectsList";
import MenuAnalyst from "../containers/MenuProponent";
import SessionButtons from "../components/SessionButtons";
//CSS
import "@styles/home.css";

const AnalystHome = () => {
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
