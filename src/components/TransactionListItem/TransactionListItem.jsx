import styles from "./TransactionListItem.module.scss";
import React from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as Pencil } from "./../../img/pencil.svg";
import { openModal } from "../../redux/slices/modal/modalSlice";
import EditTransaction from "../EditTransaction/EditTransaction";
import transactionsApiSlice from "../../redux/slices/api/transactions/transactionsApiSlice";
import convertDate from "../../utils/helperFunctions/convertDate";
import { ToastContainer, toast } from "react-toastify";

const TransactionListItem = ({ transaction }) => {
  const { _id, date, category, comment, amount, income } = transaction;
  const dispatch = useDispatch();
  const [deleteTransaction, { isLoading: isDeleting }] =
    transactionsApiSlice.useDeleteTransactionMutation();

  const handleDelete = async () => {
    try {
      await deleteTransaction(_id);

      toast.success(`Transaction has been deleted.`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      toast.error(`An error occured when deleting transcation.`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <>
      <ul
        className={`${styles.transaction} ${
          income
            ? styles.transaction__incomeBorder
            : styles.transaction__expenseBorder
        }`}
      >
        <li className={styles.transaction__item}>
          <h4 className={styles.transaction__header}>Date</h4>
          <p className={styles.transaction__data}>{convertDate(date)}</p>
        </li>
        <li className={styles.transaction__item}>
          <h4 className={styles.transaction__header}>Type</h4>
          <p className={styles.transaction__data}>
            {income ? "Income" : "Expense"}
          </p>
        </li>
        <li className={styles.transaction__item}>
          <h4 className={styles.transaction__header}>Category</h4>
          <p className={styles.transaction__data}>{category}</p>
        </li>
        <li className={styles.transaction__item}>
          <h4 className={styles.transaction__header}>Comment</h4>
          <p className={styles.transaction__data}>{comment}</p>
        </li>
        <li className={styles.transaction__item}>
          <h4
            className={styles.transaction__header}
            style={{ color: income ? "#24CCA7" : "#E0E0E0" }}
          >
            Sum
          </h4>
          <p
            className={`${styles.transaction__data} ${
              income ? styles.transaction__income : styles.transaction__expense
            }`}
          >
            {amount.toFixed(2)}
          </p>
        </li>
        <li className={styles.transaction__item__last}>
          {/* TODO: add some spinner */}
          <button className={styles.btn__delete} onClick={handleDelete}>
            {isDeleting ? "Deleting..." : "Delete"}
          </button>
          <ToastContainer />
          <button
            className={styles.btn__edit}
            onClick={() => dispatch(openModal(`${_id}edit`))}
          >
            <Pencil className={styles.btn__edit__icon} />
            Edit
          </button>
        </li>
      </ul>
      <EditTransaction transaction={transaction} />
    </>
  );
};

export default TransactionListItem;
