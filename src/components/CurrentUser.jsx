import React, { useContext } from "react";
import UserContext from "../context/UserContext";
//CSS
import '@styles/home.css';

const CurrentUser = () => {
    const { state } = useContext(UserContext);
    return (
            <label className="home_name"> Bienvenid@ - <span className="home_name_bold"> {state.userName} </span> </label>

    );
};

export default CurrentUser;