import styles from "./AddTransaction.module.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/slices/modal/modalSlice";
import FormIncome from "../FormIncome/FormIncome";
import FormExpense from "../FormExpense/FormExpense";
import SliderGreen from "../SliderGreen/SliderGreen";
import SliderRed from "../SliderRed/SliderRed";

const AddTransaction = () => {
  const dispatch = useDispatch();
  const { isModalAddTransactionOpen } = useSelector((state) => state.modal);
  const [isIncome, setIsIncome] = useState(false);

  const toggleIncome = () => {
    setIsIncome(!isIncome);
  };

  if (!isModalAddTransactionOpen) return null;
  return (
    <div className={styles.overlay}>
      <div className={styles.content}>
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

        {isIncome ? <FormIncome /> : <FormExpense />}

        <div className={styles.actBtnsWrap}>
          <button
            className={styles.closeBtn}
            onClick={() => dispatch(closeModal("isModalAddTransactionOpen"))}
          >
            <p className={styles.closeBtnText}>cancel</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTransaction;
