import React from "react";
import CurrentUser from "../components/CurrentUser";
import ExitButton from "../components/ExitButton";
import ProjectsList from "../containers/ProjectsList";
import MenuAnalyst from "../containers/MenuProponent";
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
      <ExitButton />
    </div>
  );
};

export default AnalystHome;
