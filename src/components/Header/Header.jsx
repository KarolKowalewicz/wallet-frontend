
import styles from './Header.module.scss';
import { ReactComponent as Logo } from './../../img/logowallet.svg';
import { ReactComponent as ExitDoor } from './../../img/exitdoor.svg';

// import logo from './../../img/logowallet.png'
// import logoText from './../../img/logowallettext.png'



const Header = () => {
    return(
        <div className={styles.header}>
            <div className={styles.header__logo}>
                <Logo className={styles.header__logo__svg}/>
                <h1 className={styles.header__logo__txt}>Wallet</h1>                
            </div>
            <div className={styles.header__nav}>
                <div className={styles.header__nav__name}>
                    <p>Name</p>
                    </div>
                <div className={styles.header__nav__exit}>
                    <ExitDoor className={styles.header__nav__exit__icon} />
                    <p className={styles.header__nav__exit__txt}>Exit</p>
                </div>
            </div>
        </div>
    )
}


export default Header



/////////////////


// import { ReactComponent as MySVG } from './../../img/logowallet.svg';
// <MySVG />



///////////////////////

// {/* <img  */}
                // width={30} height={30}
                // src={logo} alt="logo"/>
                // <h1>Wallet</h1>


{/* <img 
                // width={30} height={30}
                src={logoText} alt="logo"/> */}


