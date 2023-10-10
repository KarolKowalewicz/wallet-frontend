import { useNavigate } from "react-router";
import authApiSlice from "../../redux/slices/api/auth/authApiSlice";
import { useSelector } from "react-redux";
import styles from "./Header.module.scss";
import { ReactComponent as Logo } from "./../../img/logowallet.svg";
import { ReactComponent as ExitDoor } from "./../../img/exitdoor.svg";
import { RotatingLines } from "react-loader-spinner";

// import logo from './../../img/logowallet.png'
// import logoText from './../../img/logowallettext.png'

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth);

  const [logout, { isLoading, error }] = authApiSlice.useLogoutMutation();

  const handleLogout = async () => {
    const result = await logout();
    if ("error" in result) {
      //TODO: display in toast or something
      console.log(error);
    } else {
      //TODO: display in toast or something
      console.log("logged out successful");
      navigate("/login");
      navigate(0);
    }
  };
  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>
        <Logo className={styles.header__logo__svg} />
        <h1 className={styles.header__logo__txt}>Wallet</h1>
      </div>
      <div className={styles.header__nav}>
        <div className={styles.header__nav__name}>
          <p>Name: {user.name}</p>
        </div>
        <button
          className={styles.header__nav__exit}
          onClick={handleLogout}
          disabled={isLoading}
        >
          <ExitDoor className={styles.header__nav__exit__icon} />
          {isLoading ? (
            <RotatingLines strokeColor="#bdbdbd " width="20" />
          ) : (
            <p className={styles.header__nav__exit__txt}>Exit</p>
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
