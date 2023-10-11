import styles from "./BtnAddTrans.module.scss";

const BtnAddTrans = ({ onSubmit }) => {
  return (
    <button className={styles.btn} type="submit" onClick={onSubmit}>
      <p className={styles.btn__label}>add</p>
    </button>
  );
};

export default BtnAddTrans;
