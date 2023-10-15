import { closeModal } from "../../redux/slices/modal/modalSlice";
import styles from "./LogoutModal.module.scss";
import { useDispatch, useSelector } from "react-redux";
import authApiSlice from "../../redux/slices/api/auth/authApiSlice";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate } from "react-router";
import { useRef, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

const LogoutModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { modals } = useSelector((state) => state.modal);
  const [logout, { isLoading, error }] = authApiSlice.useLogoutMutation();
  const modalRef = useRef();

  const handleLogout = async () => {
    const result = await logout();
    if ("error" in result) {
      console.log(error);
      toast.error("An error occured when logging out", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      navigate("/login");
      navigate(0);
    }
  };

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        dispatch(closeModal("logout"));
      }
    };
    window.addEventListener("keydown", handleEscapeKey);
    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        dispatch(closeModal("logout"));
      }
    };
    window.addEventListener("mousedown", handleOutsideClick);
    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  if (!modals["logout"]) return null;
  return (
    <div className={styles.logoutModalContainer}>
      <div ref={modalRef} className={styles.logoutModal}>
        <p className={styles.header}>Are you sure you want to log out?</p>
        <button className={styles.button} onClick={handleLogout}>
          {isLoading ? (
            <RotatingLines width="20" strokeColor="#4a56e2" />
          ) : (
            <p className={styles.button__label}>Please log me out</p>
          )}
          <ToastContainer />
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
