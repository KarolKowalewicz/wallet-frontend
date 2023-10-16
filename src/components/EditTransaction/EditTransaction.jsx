import styles from "./EditTransaction.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/slices/modal/modalSlice";
import FormEdit from "../FormEdit/FormEdit";
import FormExpenseValidation from "../../utils/validations/FormExpenseValidation";
import FormIncomeValidation from "../../utils/validations/FormIncomeValidation";
import transactionsApiSlice from "../../redux/slices/api/transactions/transactionsApiSlice";
import Header from "../Header/Header";
import { ReactComponent as BtnClose } from "./../../img/btn_close.svg";

const EditTransaction = ({ transaction }) => {
  const { income, _id } = transaction;
  const { modals } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const [updateTransaction] =
    transactionsApiSlice.useUpdateTransactionMutation();

  const isIncome = income;

  if (!modals[`${_id}edit`]) return null;
  return (
    <div className={styles.overlay}>
      <div
        className={`${styles.content} ${
          isIncome ? styles.incomeSizeContent : ""
        }`}
      >
        <div className={styles.headerIsHidden}>
          <Header />
        </div>

        <div className={styles.btnCloseWrap}>
          <button
            className={styles.btnCloseFunc}
            onClick={() => dispatch(closeModal(`${_id}edit`))}
          >
            <BtnClose />
          </button>
        </div>

        <div className={styles.headerWrap}>
          <p className={styles.headerWrap__title}>Edit transaction</p>
        </div>

        <div className={styles.typeOfTransHead}>
          <p style={{ color: income && "#24cca7" }}>Income</p>
          <p className={styles.typeOfTransHead__slashLabel}>/</p>
          <p style={{ color: !income && "#ff6596" }}>Expense</p>
        </div>

        <FormEdit
          validationSchema={
            income ? FormIncomeValidation : FormExpenseValidation
          }
          query={updateTransaction}
          income={income}
          _id={_id}
          transaction={transaction}
        />

        <div className={styles.actBtnsWrap}>
          <button
            className={styles.closeBtn}
            onClick={() => dispatch(closeModal(`${_id}edit`))}
          >
            <p className={styles.closeBtnText}>cancel</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTransaction;
