import React from 'react';
//Coolkies - para el cierre de la sesión 
import Cookies from 'universal-cookie';
const cookies = new Cookies();
//CSS
import '@styles/home.css';

const CurrentUser = () => {
    const userName = cookies.get('userType') +" "+ cookies.get('userName') ;
    return (
            <label className="home_name"> Bienvenid@ - <span className="home_name_bold"> {userName} </span></label>

    );
};

export default CurrentUser;