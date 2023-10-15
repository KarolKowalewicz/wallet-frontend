import styles from "./TransactionsListDesktopItem.module.scss";
import React from "react";
import { ReactComponent as Pencil } from "./../../img/pencil.svg";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/slices/modal/modalSlice";
import transactionsApiSlice from "../../redux/slices/api/transactions/transactionsApiSlice";
import EditTransaction from "../EditTransaction/EditTransaction";
import convertDate from "../../utils/helperFunctions/convertDate";

const TransactionsListDesktopItem = ({ transaction }) => {
  const { _id, date, category, comment, amount, income } = transaction;
  const dispatch = useDispatch();
  const [deleteTransaction, { isLoading: isDeleting }] =
    transactionsApiSlice.useDeleteTransactionMutation();

  const handleDelete = async () => {
    await deleteTransaction(_id);
  };

  return (
    <>
      <tr className={styles.transtable__row}>
        <td className={styles.transtable__rowcell}>{convertDate(date)}</td>
        <td className={styles.transtable__rowcell__type}>
          {income ? "Income" : "Expense"}
        </td>
        <td className={styles.transtable__rowcell}>{category}</td>
        <td className={styles.transtable__rowcell__com}>{comment}</td>
        <td
          className={styles.transtable__rowcell__sum}
          style={{ color: income ? "#24CCA7" : "#FF6596" }}
        >
          {amount.toFixed(2)}
        </td>
        <td className={styles.transtable__rowcell}>
          <button className={styles.btn__edit}>
            <Pencil
              className={styles.btn__edit__icon}
              onClick={() => dispatch(openModal(`${_id}edit`))}
            />
          </button>
          <button className={styles.btn__delete} onClick={handleDelete}>
            {/* TODO: add some spinner */}
            {isDeleting ? "Deleting..." : "Delete"}
          </button>
        </td>
      </tr>
      <EditTransaction transaction={transaction} />
    </>
  );
};

export default TransactionsListDesktopItem;
