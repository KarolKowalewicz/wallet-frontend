import styles from "./EditTransaction.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/slices/modal/modalSlice";
import FormEdit from "../FormEdit/FormEdit";
import FormExpenseValidation from "../../utils/validations/FormExpenseValidation";
import FormIncomeValidation from "../../utils/validations/FormIncomeValidation";
import transactionsApiSlice from "../../redux/slices/api/transactions/transactionsApiSlice";

const EditTransaction = ({ transaction }) => {
  const { income, _id } = transaction;
  const { modals } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const [updateTransaction] =
    transactionsApiSlice.useUpdateTransactionMutation();

  if (!modals[`${_id}edit`]) return null;
  return (
    <div className={styles.overlay}>
      <div className={styles.content}>
        <div className={styles.headerWrap}>
          <p className={styles.headerWrap__title}>Edit transaction</p>
        </div>

        <div className={styles.typeOfTransHead}>
          <p style={{ color: income && "#24cca7" }}>income</p>
          <p className={styles.slashLabel}>/</p>
          <p style={{ color: !income && "#ff6596" }}>expense</p>
        </div>

        <FormEdit
          validationSchema={
            income ? FormIncomeValidation : FormExpenseValidation
          }
          query={updateTransaction}
          income={income}
          _id={_id}
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
