import { useSelector } from "react-redux";
import styles from "./Header.module.scss";
import { ReactComponent as Logo } from "./../../img/logowallet.svg";
import { ReactComponent as ExitDoor } from "./../../img/exitdoor.svg";
import LogoutModal from "../LogoutModal/LogoutModal";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/slices/modal/modalSlice";

// import logo from './../../img/logowallet.png'
// import logoText from './../../img/logowallettext.png'

const Header = () => {
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div className={styles.header}>
      <Link to="/">
        <div className={styles.header__logo}>
          <Logo className={styles.header__logo__svg} />
          <h1 className={styles.header__logo__txt}>Wallet</h1>
        </div>
      </Link>
      <div className={styles.header__nav}>
        <div className={styles.header__nav__name}>
          <p>{user.name}</p>
        </div>
        <button
          className={styles.header__nav__exit}
          onClick={() => dispatch(openModal("logout"))}
        >
          <ExitDoor className={styles.header__nav__exit__icon} />

          <p className={styles.header__nav__exit__txt}>Exit</p>
        </button>
      </div>
      <LogoutModal />
    </div>
  );
};

export default Header;
