import React from 'react';
import css from './Register.module.scss';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import upperEllipse from '../../img/Ellipse2.png';
import frame from '../../img/Frame_2.png';
import lowerEllipse from '../../img/Ellipse1.png'


const Register = () => {
  return (   
    <div className={css.registerPage}>
        <div className={css.registerPage__backdrop}></div>
        <div className={css.registerPage__title}>Finance App</div>
        <img src={upperEllipse} alt='ellipse' className={css.registerPage__ellipse} />
        <img src={lowerEllipse} alt='ellipse' className={css.registerPage__lowerEllipse} />
        <img src={frame} alt='frame' className={css.registerPage__frame} />
        <RegisterForm />
    </div>
  )
}

export default Register

