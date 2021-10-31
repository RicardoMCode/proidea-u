import React, { useContext } from "react";
import ProponentContext from "../context/ProponentContext";
//CSS
import '@styles/home.css';

const CurrentUser = () => {
    const { state } = useContext(ProponentContext);
    return (
            <label className="home_name"> Bienvenid@ - <span className="home_name_bold"> {state.userName} </span> </label>

    );
};

export default CurrentUser;