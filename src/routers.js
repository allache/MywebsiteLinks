import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import pic from './imag02.jpg';
import * as React from 'react';
import Button from '@mui/material/Button';
import styles from './App.module.css';
import ERSV from './ERSV';
import App from './App'

function MainApp() {
    return (
      <Router>
        <Route exact path="/" component={App} />
        <Route path="/ERSV" component={<Person/>} />
      </Router>
    );
  }
  
  export default MainApp;