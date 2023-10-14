import { useState } from "react";
import styles from "./AddTransaction.module.scss";
import { ReactComponent as BtnClose } from "./../../img/btn_close.svg";
import Header from "../Header/Header";
import BtnCancelTrans from "../BtnCancelTrans/BtnCancelTrans";
import FormIncome from "../FormIncome/FormIncome";
import FormExpense from "../FormExpense/FormExpense";
import SliderGreen from "../SliderGreen/SliderGreen";
import SliderRed from "../SliderRed/SliderRed";

const AddTransaction = ({ onClose }) => {
  const [isIncome, setIsIncome] = useState(false);

  const toggleIncome = () => {
    setIsIncome(!isIncome);
  };

  return (
    // backdrop
    <div className={styles.overlay}>
      {/* modal content */}
      <div className={`${styles.content} ${isIncome ? styles.incomeSizeContent : ""}`}>

        <div className={styles.headerIsHidden}>
        <Header />
        </div>
        
        {/* close btn */}
        <div className={styles.btnCloseWrap}>
          <button className={styles.btnCloseFunc} onClick={onClose}>
            <BtnClose />
          </button>
        </div>

        {/* transaction head */}
        <div className={styles.headerWrap}>
          <p className={styles.headerWrap__title}>Add transaction</p>
        </div>

        {/* container for slider */}
        <div className={styles.sliderContent}>
          <p
            className={styles.incomeLabel}
            style={{ color: isIncome ? "#24CCA7" : "#E0E0E0" }}
            onClick={() => setIsIncome(true)}
          >
            Income
          </p>

          <input
            className={styles.sliderCheckbox}
            type="checkbox"
            checked={isIncome}
            onChange={toggleIncome}
          />
          <div className={styles.sliderContainer}>
            <div
              className={styles.slider}
              style={{
                transform: isIncome ? "translateX(-82px)" : "translateX(14px)",
              }}
            >
              <SliderRed className={styles.sliderRed} onClick={toggleIncome} />
              <SliderGreen
                className={styles.sliderGreen}
                onClick={toggleIncome}
              />
            </div>
          </div>

          <p
            className={styles.expenseLabel}
            style={{ color: isIncome ? "#E0E0E0" : "#FF6596" }}
            onClick={() => setIsIncome(false)}
          >
            Expense
          </p>
        </div>
        
        {isIncome ? <FormIncome onClose={onClose} /> : <FormExpense onClose={onClose} />}

        <div className={styles.btnCancelTransWrap}>
          <BtnCancelTrans onClose={onClose} />
        </div>
      </div>
    </div>
  );
};

export default AddTransaction;
