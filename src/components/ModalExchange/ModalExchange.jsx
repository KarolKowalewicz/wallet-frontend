import styles from "./ModalExchange.module.scss";
import Exchange from "../Exchange/Exchange";

const ModalExchange = () => {
  return (
    <div className={styles.exchange}>
      <Exchange />
    </div>
  );
};

export default ModalExchange;
