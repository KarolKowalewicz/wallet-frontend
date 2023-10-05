
// import logo from './../../img/logowallet.png'
import logoText from './../../img/logowallettext.png'
import { ReactComponent as ExitDoor } from './../../img/exitdoor.svg';
import styles from './Header.module.scss';



const Header = () => {
    return(
        <div className={styles.header}>
            <div className={styles.header__logo}>
                <img 
                // width={30} height={30}
                src={logoText} alt="logo"/>
            </div>
            <div className={styles.header__nav}>
                <div className={styles.header__nav__name}>
                    <p>Name</p>
                    </div>
                <div className={styles.header__nav__exit}>
                    <ExitDoor className={styles.header__nav__exit__icon} />
                    <p>Exit</p>
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





