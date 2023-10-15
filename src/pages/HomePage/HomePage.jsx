import Media from "react-media";
import { useEffect } from "react";
import ButtonAdd from "../../components/ButtonAdd/ButtonAdd";
import styles from "./HomePage.module.scss";
import TransactionList from "./../../components/TransactionList/TransactionList";
import TransactionListDesktop from "./../../components/TransactionListDesktop/TransactionListDesktop";
import Loader from "../../components/Lodaer/Loader";

import transactionsApiSlice from "../../redux/slices/api/transactions/transactionsApiSlice";

const HomePage = () => {
  useEffect(() => {
    document.title = "Welcome to Wallet App";
  }, []);

  const { data, isLoading } = transactionsApiSlice.useGetTransactionsQuery();

  if (isLoading) return <Loader />;

  return (
    <>
      <div className={styles.grid}>
        <Media query="(max-width: 767px)">
          {(matches) =>
            matches ? (
              <TransactionList
                transactions={data?.transactions}
                isLoading={isLoading}
              />
            ) : (
              <div className={styles.grid__transactions}>
                <TransactionListDesktop
                  transactions={data?.transactions}
                  isLoading={isLoading}
                />
              </div>
            )
          }
        </Media>
      </div>
      <ButtonAdd />
    </>
  );
};

export default HomePage;
