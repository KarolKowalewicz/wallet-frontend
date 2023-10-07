import React from 'react';
import css from './Register.module.css';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';
import ellipse from '../../img/Ellipse2.png';


export const Register = () => {
  return (
    <div className={css.registerPage}>
        {/* <div className={css.registerPage__title}>Finance App</div>
        <img src={ellipse} alt='ellipse' className={css.registerPage__ellipse} /> */}
        <RegisterForm />
    </div>
  )
}



