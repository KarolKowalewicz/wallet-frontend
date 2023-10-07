// import { useAuth } from "hooks/userAuth"
// import { useDispatch } from "react-redux"
// import { logOut } from "components/redux/auth/operations"

import styles from './Header.module.scss';
import { ReactComponent as Logo } from './../../img/logowallet.svg';
import { ReactComponent as ExitDoor } from './../../img/exitdoor.svg';

// import logo from './../../img/logowallet.png'
// import logoText from './../../img/logowallettext.png'



const Header = () => {


    // const dispatch = useDispatch() // dotyczy logOut
    // const { user } = useAuth()     // dotyczy user name

    // const handleLogOut = () => dispatch(logOut())

    // jakiś  onClick={handleLogOut}
    // osobno na icon i txt


    return(
        <div className={styles.header}>
            <div className={styles.header__logo}>
                <Logo className={styles.header__logo__svg}/>
                <h1 className={styles.header__logo__txt}>Wallet</h1>                
            </div>
            <div className={styles.header__nav}>
                <div className={styles.header__nav__name}>
                    <p>Name</p>
                    {/* <p>Name{user?.name}</p> */}
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
