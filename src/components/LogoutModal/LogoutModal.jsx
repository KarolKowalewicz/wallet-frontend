import styles from "./LogoutModal.module.scss";
const LogoutModal = ({ logout, onClose }) => {
  return (
    <div className={styles.logoutModalContainer}>
      <div className={styles.logoutModal}>
        <p className={styles.header}>Are you sure you want to log out?</p>
        <button className={styles.button} onClick={logout}>
          <p className={styles.button__label}>Please log me out</p>
        </button>
        <button
          className={`${styles.button} ${styles.button__close}`}
          onClick={onClose}
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
