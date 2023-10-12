import { useNavigate } from "react-router";
import authApiSlice from "../../redux/slices/api/auth/authApiSlice";
import { useSelector } from "react-redux";
import styles from "./Header.module.scss";
import { ReactComponent as Logo } from "./../../img/logowallet.svg";
import { ReactComponent as ExitDoor } from "./../../img/exitdoor.svg";
import { RotatingLines } from "react-loader-spinner";
import { useState } from "react";
import LogoutModal from "../LogoutModal/LogoutModal";
import { Link } from "react-router-dom";

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

  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

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
          onClick={openModal}
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
      {modal && <LogoutModal logout={handleLogout} onClose={closeModal} />}
    </div>
  );
};

export default Header;
