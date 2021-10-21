import React from 'react';
import LoginForm from '../containers/LoginForm';
import Register from '../containers/register';
import logo from '@logos/logo.png';
import VideoHome from '../components/VideoHome';
import Footer from '../components/Footer';
import '@styles/home.css';

const Home = () => {
  return (
    <>
      <div className="home container">
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
      <Register />
      <VideoHome />
      <Footer />
    </>
  );
};

export default Home;
