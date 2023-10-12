import React, { useState } from "react";
import { ReactComponent as Pencil } from "./../../img/pencil.svg";
import styles from "./TransactionListItem.module.scss";
import transactionsApiSlice from "../../redux/slices/api/transactions/transactionsApiSlice";
import EditTransaction from "../EditTransaction/EditTransaction";

const TransactionListItem = ({
  date,
  category,
  income,
  comment,
  amount,
  _id,
}) => {
  const [deleteTransaction, { isLoading: isDeleting }] =
    transactionsApiSlice.useDeleteTransactionMutation();

  const handleDelete = async () => {
    await deleteTransaction(_id);
  };

  const [showEdittrans, setShowEditTrans] = useState(false);

  const openModal = () => {
    setShowEditTrans(true);
  };

  const closeModal = () => {
    setShowEditTrans(false);
  };

  return (
    <ul className={styles.transaction}>
      <li className={styles.transaction__item}>
        <h4 className={styles.transaction__header}>Date</h4>
        <p className={styles.transaction__data}>{date}</p>
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
        <h4 className={styles.transaction__header}>Sum</h4>
        <p className={styles.transaction__data}>{amount}</p>
      </li>
      <li className={styles.transaction__item__last}>
        {/* TODO: add some spinner */}
        <button className={styles.btn__delete} onClick={handleDelete}>
          {isDeleting ? "Deleting..." : "Delete"}
        </button>
        <button className={styles.btn__edit} onClick={openModal}>
          <Pencil className={styles.btn__edit__icon} />
          Edit
        </button>
      </li>
      {showEdittrans && <EditTransaction onClose={closeModal} income={income} />}
    </ul>
  );
};

export default TransactionListItem;
