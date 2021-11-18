import React from "react";
import ExitButton from "../components/ExitButton";

const SessionButtons = () => {
  return (
    <div className="row justify-content-end">
      <div className="col-sm-4 session_button">
        <button
          type="button"
          className="home_exit_button"
          //   onClick={closeSession}
        >
          <span>Admin</span>
        </button>
        <button
          type="button"
          className="home_exit_button"
          //   onClick={closeSession}
        >
          <span>Analist</span>
        </button>
        <div className="content_button">
          <ExitButton />
        </div>
      </div>
    </div>
  );
};

export default SessionButtons;
