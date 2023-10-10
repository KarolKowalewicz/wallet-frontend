import styles from "./Balance.module.scss";

const Balance = ({ balance, isLoading }) => {
  return (
    <div className={styles.balance}>
      <div className={styles.balance__layout}>
        <p className={styles.balance__description}>your balance</p>
        <h3 className={styles.balance__content}>
          {/* TODO: Add some spinner */}
          &euro; {isLoading ? "Loading..." : balance}
        </h3>
      </div>
    </div>
  );
};

export default Balance;
