import css from './RegisterForm.module.css';
import logo from '../../img/logowallet.png';

const RegisterForm = () => {
    return (
        <div className={css.formBox}>
            <div className={css.logoSection}>
                <img src={logo} className={css.logoImg} />
                <span className={css.logoTitle}>Wallet</span>
            </div>
            <form className={css.form}>
                <label className={css.label}>                    
                    <input className={css.input} placeholder='E-mail' type='email' name='email'/>
                </label>
                <label className={css.label}>
                    <input className={css.input} placeholder='Password' type='password' name='password' />
                </label>
                <label className={css.label}>
                    <input className={css.input} placeholder='Confirm Password'/>
                </label>
                <label className={css.label}>
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

export default RegisterForm