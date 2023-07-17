import logo from "./logo.svg";
import { Link } from "react-router-dom";
import pic from "./imag02.jpg";
import * as React from "react";
import { Button } from "@mui/material";
import styles from "./App.module.css";
import MainApp from "./routers";
import ERSV from "./ERSV";
import backgroundImage from "./backgroundimg.jpg";
import image01 from "./IMG01.JPG";
import image02 from "./IMG02.JPG";

function Main() {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: 'center',
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className={styles.App}>
      <div style={containerStyle}>
        <br />
        <br />
        <br />
        <div className="center">
       <h1 className={styles.h1}>Hello there ... </h1> 
          <img src={pic} alt="Avatar" className="avatar" />
          <br /> 
          <br />
          <as href="https://mega.nz/file/ILNSDJ4C#-ZzA8ZFpnpLQJIVle6GzvBE0vbbPM6r6Mu5UTKNg1F4" target="_blank">
            <Button variant="contained" className={styles.btn}>
               "Gestion de Stock " Application Desktop 
            </Button>
          </as>     
          <span />
          <br />
          <br />

          <br />
          <a
            href="https://allacheabdelmalek.netlify.app/?fbclid=IwAR2j_-Cgj9Qow2tTHs28E84ms24qEx1nYEJBnqWO8sVa8f7nDTq4xVPY7yk"
            target="_blank"
          >
            <Button variant="contained" className={styles.btn}>
              Portfolio
            </Button>
          </a>
          <br />
          <br />
          <a
            href="https://www.linkedin.com/in/allache-abdelmalek-942b10173/?fbclid=IwAR2JwM9WVngPzuqe1b4lJffeZWDmQc_GUbtHfE_2ASZ-LTK-fmTLbzMks-c"
            target="_blank"
          >
            <Button variant="contained" className={styles.btn}>
              My Linkedin  
            </Button>
          </a>
          <br />
          <br />

            <a
            href="https://cv-abdelmalek-85cd97.netlify.app/?fbclid=IwAR3PkIwydmZVpYgWz0DmkwqMSe1Lh-Tl_Qv6JW1jpe8ZrpEk41YLK5cy5_I"
            target="_blank"
           >
            <Button variant="contained" className={styles.btn}>
              just a website showing Gallery of cv exemples 01 
            </Button>
            </a>
            <br />
            <br />

            <h1 className={styles.h1}>
            the pictures down here is similare
            <br/> of what i doing study and planning on CCTV field job
            </h1>

  
           <br/>
           <img src={image02} alt="Avatar" className="avatar" /> <img src={image01} alt="Avatar" className="avatar" />

        </div>
      </div>
    </div>
  );
}

export default Main;
