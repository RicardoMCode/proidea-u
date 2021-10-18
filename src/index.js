//Import React
import React from 'react';
import ReactDOM from 'react-dom';
//Import Boostrap
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//Import CSS
import "./styles/global.css";
//Import the React components 
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('app'))