import React from 'react';
import LoginForm from '../containers/LoginForm';
import RecoveryPass from '../containers/RecoveryPass';
import RegisterProponentModal from '../containers/RegisterProponentModal';
import logo from '@logos/logo.png';
import VideoHome from '../components/VideoLogin';
import '@styles/login.css';

const Login = () => {
  return (
    <>
      <div className="login container">
        <div className="row justify-content-around">
          {/* <!--login block--> */}
          <div className="col-md-4 row_item">
            <LoginForm />
          </div>
          {/* <!--logo block--> */}
          <div className="col-md-4 row_item">
            <div className="card text-center img">
              <div className="card-body">
               <img
                className="img-fluid mx-auto d-block"
                src={logo}
                alt="Logo App"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <RegisterProponentModal />
      <RecoveryPass />
      <VideoHome />
    </>
  );
};

export default Login;
