import React from 'react';
import HomeModule from '../containers/HomeModule'
import '@styles/home.css'
const user = "Nombre del Usuario"

const ProponentHome = () => {
    return (
        <div className="home row">
            <label className="home_name"> Bienvenid@ - <span className="home_name_bold"> {user} </span> </label>
            <div className="col-sm-4 home_module"><HomeModule></HomeModule></div>
            <div className="col-sm-4 home_module"><HomeModule></HomeModule></div>
            <div className="col-sm-4 home_module"><HomeModule></HomeModule></div>

        </div>
    );
};

export default ProponentHome;


// {() => {
//     for (let i = 0; i < 3; i++) {
//         <HomeModule/>
//     }
// }}