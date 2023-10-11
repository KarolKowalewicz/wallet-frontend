import { useState } from "react";
import TransactionListItem from "../TransactionListItem/TransactionListItem";
import EditTransaction from "../EditTransaction/EditTransaction";

const TransactionList = ({ transactions, isLoading }) => {
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
    <ul>
      {transactions.data.length > 0 ? (
        transactions.data.map((transaction) => (
          <TransactionListItem key={transaction.id} {...transaction} />
        ))
      ) : (
        <h2>No transactions added yet</h2>
      )}
    </ul>
  );
};

export default TransactionList;
