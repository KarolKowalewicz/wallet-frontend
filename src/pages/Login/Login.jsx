import React from "react";
import  LoginForm  from "../../components/LoginForm/LoginForm";
import styles from './Login.module.scss';
import upperEllipse from '../../img/Ellipse2.png';
import frame from '../../img/Frame.png';
import lowerEllipse from '../../img/Ellipse1.png'

const Login = () => {
  return (
    <div className={styles.registerPage}>
    <div className={styles.registerPage__backdrop}></div>
    <div className={styles.registerPage__title}>Finance App</div>
    <img src={upperEllipse} alt='ellipse' className={styles.registerPage__ellipse} />
    <img src={lowerEllipse} alt='ellipse' className={styles.registerPage__lowerEllipse} />
    <img src={frame} alt='frame' className={styles.registerPage__frame} />

    <LoginForm />
</div>
  );
};

export default Login;