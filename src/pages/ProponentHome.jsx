import React from 'react';
import HomeModule from '../containers/HomeModule'
import '@styles/home.css'

const ProponentHome = () => {
    return (
        <div className="home row">
            <div className="col-sm-4 home_module"><HomeModule></HomeModule></div>
            <div className="col-sm-4 home_module"><HomeModule></HomeModule></div>
            <div className="col-sm-4 home_module"><HomeModule></HomeModule></div>
        </div>
    );
};

export default ProponentHome;