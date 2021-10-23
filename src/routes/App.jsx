import React from 'react';
import { BrowserRouter , Switch, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import ProponentMenu from '../pages/ProponentMenu';
import AnalistMenu from '../pages/AnalistMenu';
import AdminMenu from '../pages/AdminMenu';
//Acá es en donde se renderizan los componentes
const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/proponent-menu/" component={ProponentMenu} />
          <Route exact path="/analist-menu/" component={AnalistMenu} />
          <Route exact path="/admin-menu/" component={AdminMenu} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
