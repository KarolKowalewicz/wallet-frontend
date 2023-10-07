import css from './RegisterForm.module.scss';
import logo from '../../img/logowallet.png';

import { ReactComponent as Avatar } from '../../img/avatar.svg';
import { ReactComponent as Lock } from '../../img/lock.svg'
import { ReactComponent as Email } from '../../img/email.svg'


const RegisterForm = () => {
    return (
        <div className={css.formBox}>
            <div className={css.logoSection}>
                <img src={logo} className={css.logoImg} alt='wallet' />
                <span className={css.logoTitle}>Wallet</span>
            </div>
            <form className={css.form}>
                <label className={css.label}>
                    <Email className={css.svg}/>                    
                    <input className={css.input} placeholder='E-mail' type='email' name='email'/>
                </label>
                <label className={css.label}>
                    <Lock className={css.svg}/>
                    <input className={css.input} placeholder='Password' type='password' name='password' />
                </label>
                <label className={css.label}>
                    <Lock className={css.svg}/>
                    <input className={css.input} placeholder='Confirm Password' type='password' name='confirm-password'/>
                </label>
                <label className={css.label}>
                    <Avatar className={css.svg}/>                    
                    <input className={css.input} placeholder='First name' type='text' name='name'/>
                </label>
                <div className={css.buttonSection}>
                    <button className={css.formButton} type="submit">REGISTER</button>
                    <button className={css.formButton} >LOGIN</button>
                </div>    
            </form>
        </div>
    )
}

export default RegisterForm;