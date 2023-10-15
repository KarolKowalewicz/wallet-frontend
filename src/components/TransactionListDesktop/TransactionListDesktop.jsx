import { useState } from "react";
import styles from "./TransactionListDesktop.module.scss";
import TransactionListDesktopItem from "../TransactionsListDesktopItem/TransactionsListDesktopItem";
import EditTransaction from "../EditTransaction/EditTransaction";

const TransactionListDesktop = ({ transactions, isLoading }) => {
  const [showEdittrans, setShowEditTrans] = useState(false);

  const openModal = () => {
    setShowEditTrans(true);
  };

  const closeModal = () => {
    setShowEditTrans(false);
  };

  //TODO: add some spinner
  if (isLoading) return <h2>Loading...</h2>;

  return (
    <table className={styles.transtable}>
      <thead className={styles.transtable__head}>
        <tr className={styles.transtable__headtable}>
          <th className={styles.transtable__headcell}>Date</th>
          <th className={styles.transtable__headcell__type}>Type</th>
          <th className={styles.transtable__headcell}>Category</th>
          <th className={styles.transtable__headcell__com}>Comment</th>
          <th className={styles.transtable__headcell__sum}>Sum</th>
          <th className={styles.transtable__headcell}></th>
        </tr>
      </thead>

      {transactions?.data.length > 0 ? (
        <tbody className={styles.transtable__body}>
          {transactions?.data.map((transaction) => (
            <TransactionListDesktopItem
              key={transaction._id}
              transaction={transaction}
            />
          ))}
        </tbody>
      ) : (
        <h2>No transactions added yet</h2>
      )}
    </table>
  );
};

export default TransactionListDesktop;
