import logo from './logo.svg';
import {Link} from 'react-router-dom';
import pic from './imag02.jpg';
import * as React from 'react';
import { Button } from '@mui/material';
import styles from './App.module.css';
import MainApp from './routers';
import ERSV from './ERSV';
function App() {

  const redirectToPage = () => {
    window.location.href = '/ERSV';
  };



  return (
    <div className={styles.App}>
   <br/>
    <div className="center" >
    <img src={pic} alt="Avatar" className="avatar"/>
    <br/>
    <br/>
        <a href= "https://www.google.com" target="_blank">
    <Button  variant="contained" className={styles.btn}>Hello World</Button>
    </a>
    <br/>
    <br/>
    <div>

  </div>

   <a href= "https://www.google.com" >
    <Button   variant="contained" onClick={redirectToPage} className={styles.btn}>Hevdsbdsbd</Button>
    </a>
    <span/>
    <br/>
    <br/>

    <br/>
    <a href= "https://www.google.com" target="_blank">
    <Button  variant="contained" className={styles.btn}>Hello World</Button>
    </a>
    <br/>
    <br/>
      <a href= "https://www.google.com" target="_blank">
    <Button  variant="contained" className={styles.btn}>Hello World</Button>
    </a>
    </div>
    </div>
  );
}

export default App;
