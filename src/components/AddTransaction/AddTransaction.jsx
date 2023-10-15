import styles from "./AddTransaction.module.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/slices/modal/modalSlice";
import SliderGreen from "../SliderGreen/SliderGreen";
import SliderRed from "../SliderRed/SliderRed";
import FormEdit from "../FormEdit/FormEdit";
import FormExpenseValidation from "../../utils/validations/FormExpenseValidation";
import FormIncomeValidation from "../../utils/validations/FormIncomeValidation";
import transactionsApiSlice from "../../redux/slices/api/transactions/transactionsApiSlice";

import Header from "../Header/Header";
import { ReactComponent as BtnClose } from "./../../img/btn_close.svg";

const AddTransaction = () => {
  const dispatch = useDispatch();
  const { modals } = useSelector((state) => state.modal);
  const [addTransaction] = transactionsApiSlice.useAddTransactionMutation();
  const [isIncome, setIsIncome] = useState(false);

  const toggleIncome = () => {
    setIsIncome(!isIncome);
  };

  if (!modals["addTransaction"]) return null;
  return (
    <div className={styles.overlay}>
      <div className={`${styles.content} ${isIncome ? styles.incomeSizeContent : ""}`}>

      <div className={styles.headerIsHidden}>
        <Header />
      </div>

      <div className={styles.btnCloseWrap}>
          <button className={styles.btnCloseFunc} onClick={() => dispatch(closeModal("addTransaction"))}>
            <BtnClose />
          </button>
      </div>

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

        <FormEdit
          validationSchema={
            isIncome ? FormIncomeValidation : FormExpenseValidation
          }
          query={addTransaction}
          income={isIncome}
          _id={null}
        />

        <div className={styles.actBtnsWrap}>
          <button
            className={styles.closeBtn}
            onClick={() => dispatch(closeModal("addTransaction"))}
          >
            <p className={styles.closeBtnText}>cancel</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTransaction;
