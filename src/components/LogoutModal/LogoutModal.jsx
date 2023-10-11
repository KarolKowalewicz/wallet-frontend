import styles from "./LogoutModal.module.scss";
const LogoutModal = ({ onClose }) => {
  return (
    <div className={styles.logoutModalContainer}>
      <div className={styles.logoutModal}>
        <button onClick={onClose}>close me</button>
      </div>
    </div>
  );
};

export default LogoutModal;
