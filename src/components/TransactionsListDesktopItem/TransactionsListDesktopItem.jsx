import React from "react";
import { ReactComponent as Pencil } from "./../../img/pencil.svg";
import styles from "./TransactionsListDesktopItem.module.scss";
import transactionsApiSlice from "../../redux/slices/api/transactions/transactionsApiSlice";

const TransactionsListDesktopItem = ({
  date,
  category,
  income,
  comment,
  amount,
  _id,
}) => {
  const [deleteTransaction, { isLoading: isDeleting }] =
    transactionsApiSlice.useDeleteTransactionMutation();

  return (
    <tr className={styles.transtable__row}>
      <td className={styles.transtable__rowcell}>{date}</td>
      <td className={styles.transtable__rowcell__type}>
        {income ? "Income" : "Expense"}
      </td>
      <td className={styles.transtable__rowcell}>{category}</td>
      <td className={styles.transtable__rowcell__com}>{comment}</td>
      <td className={styles.transtable__rowcell__sum}>{amount}</td>
      <td className={styles.transtable__rowcell}>
        <button className={styles.btn__edit}>
          <Pencil className={styles.btn__edit__icon} />
        </button>
        <button
          className={styles.btn__delete}
          onClick={async () => await deleteTransaction(_id)}
        >
          {/* TODO: add some spinner */}
          {isDeleting ? "Deleting..." : "Delete"}
        </button>
      </td>
    </tr>
  );
};

export default TransactionsListDesktopItem;
