import React from 'react';
import css from './Register.module.css'
import { Fragment } from 'react';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';


export const Register = () => {
  return (
    <Fragment className={css.registerPage}>
        <RegisterForm />
    </Fragment>
  )
}



