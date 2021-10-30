import React from 'react';
import { BrowserRouter , Switch, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import ProponentHome from '../pages/ProponentHome';
import AnalistHome from '../pages/AnalistHome';
import AdminHome from '../pages/AdminHome';
import Footer from '../components/Footer';
//Acá es en donde se renderizan los componentes
const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/proponent-home/" component={ProponentHome} />
          <Route exact path="/analist-home/" component={AnalistHome} />
          <Route exact path="/admin-home/" component={AdminHome} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Layout>
    </BrowserRouter>
  );
};
export default App;
