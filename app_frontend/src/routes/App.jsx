import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//Views
import Layout from "../containers/Layout";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import ProponentHome from "../pages/ProponentHome";
import AnalistHome from "../pages/AnalistHome";
import AdminHome from "../pages/AdminHome";
import Footer from "../components/Footer";
//Context - universal variable
import ProjectContext from "../context/ProjectContext";
import useProjectState from "../hooks/useProjectState";
//Acá es en donde se renderizan los componentes
const App = () => {
  const projectState = useProjectState();
  return (
    <BrowserRouter>
      <ProjectContext.Provider value={projectState}>
        <Layout>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/proponent-home/" component={ProponentHome} />
            <Route exact path="/analyst-home/" component={AnalistHome} />
            <Route exact path="/admin-home/" component={AdminHome} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </Layout>
      </ProjectContext.Provider>
    </BrowserRouter>
  );
};
export default App;
