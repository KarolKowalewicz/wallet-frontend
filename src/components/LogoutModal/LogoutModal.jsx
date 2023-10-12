import { closeModal } from "../../redux/slices/modal/modalSlice";
import styles from "./LogoutModal.module.scss";
import { useDispatch, useSelector } from "react-redux";
import authApiSlice from "../../redux/slices/api/auth/authApiSlice";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate } from "react-router";

const LogoutModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { modals } = useSelector((state) => state.modal);
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

  if (!modals["logout"]) return null;
  return (
    <div className={styles.logoutModalContainer}>
      <div className={styles.logoutModal}>
        <p className={styles.header}>Are you sure you want to log out?</p>
        <button className={styles.button} onClick={handleLogout}>
          {isLoading ? (
            <RotatingLines width="20" strokeColor="#4a56e2" />
          ) : (
            <p className={styles.button__label}>Please log me out</p>
          )}
        </button>
        <button
          className={`${styles.button} ${styles.button__close}`}
          onClick={() => dispatch(closeModal("logout"))}
        >
          <p
            className={`${styles.button__label} ${styles.button__label__close} `}
          >
            I want to stay here
          </p>
        </button>
      </div>
    </div>
  );
};

export default LogoutModal;
