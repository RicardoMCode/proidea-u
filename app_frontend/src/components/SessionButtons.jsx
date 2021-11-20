import React from "react";
import ExitButton from "../components/ExitButton";
import AdminButton from "./AdminButton";
import AnalystButton from "./AnalystButton";
//Coolkies de sesión
import Cookies from "universal-cookie";
const cookies = new Cookies();

const SessionButtons = () => {
  const userType = cookies.get("userType");
  return (
    <div className="row justify-content-end">
      <div className="col-sm-4 session_button">
        {/* valido tipo de usuario y libero el acceso  */}
        {userType == "useranalyst" || userType == "useradmin" ? (
          <AnalystButton />
        ) : (
          <div></div>
        )}
        {userType == "useradmin" ? <AdminButton /> : <div></div>}
        <ExitButton />
      </div>
    </div>
  );
};

export default SessionButtons;
