import React from "react";
import Layout from "../containers/Layout";
import Login from "../containers/login";
import Register from "../containers/register";
//Acá es en donde se renderizan los componentes
const App = () => {
    return(
        <Layout>
            <Login />
            <Register />
        </Layout>
    );
}

export default App;