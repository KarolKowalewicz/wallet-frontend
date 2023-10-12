import TransactionListItem from "../TransactionListItem/TransactionListItem";

const TransactionList = ({ transactions, isLoading }) => {
  //TODO: add some spinner
  if (isLoading) return <h2>Loading...</h2>;

  return (
    <ul>
      {transactions?.data.length > 0 ? (
        transactions?.data.map((transaction) => (
          <TransactionListItem key={transaction.id} transaction={transaction} />
        ))
      ) : (
        <h2>No transactions added yet</h2>
      )}
    </ul>
  );
};

export default TransactionList;
