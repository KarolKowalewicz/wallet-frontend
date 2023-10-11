import styles from "./LogoutModal.module.scss";
const LogoutModal = ({ logout, onClose }) => {
  return (
    <div className={styles.logoutModalContainer}>
      <div className={styles.logoutModal}>
        <p>Are you sure you want to leave?</p>
        <button onClick={logout}>yes, take out of here</button>
        <button onClick={onClose}>I wanna stay here for a little more</button>
      </div>
    </div>
  );
};

export default LogoutModal;
