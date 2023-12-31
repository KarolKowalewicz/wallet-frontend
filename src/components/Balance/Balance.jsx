import { RotatingLines } from "react-loader-spinner";
import styles from "./Balance.module.scss";

const Balance = ({ balance, isLoading }) => {
  return (
    <div className={styles.balanceClass}>
      <div className={styles.balanceClass__layout}>
        <p className={styles.balanceClass__layout__description}>your balance</p>
        <h3 className={styles.balanceClass__layout__content}>
          {/* TODO: Add some spinner */}
      {isLoading ? (
          <RotatingLines strokeColor="black" width="30" />
          ) : (
            `€ ${balance}`
          )}
        </h3>
      </div>
    </div>
  );
};

export default Balance;
