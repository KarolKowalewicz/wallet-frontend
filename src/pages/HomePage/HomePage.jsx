import Media from "react-media";
import { useEffect } from "react";
import Balance from "../../components/Balance/Balance";
import ButtonAdd from "../../components/ButtonAdd/ButtonAdd";
import styles from "./HomePage.module.scss";
import NavBar from "./../../components/NavBar/NavBar";
import TransactionList from "./../../components/TransactionList/TransactionList";
import TransactionListDesktop from "./../../components/TransactionListDesktop/TransactionListDesktop";
import Exchange from "./../../components/Exchange/Exchange";
import Loader from "../../components/Lodaer/Loader";

import transactionsApiSlice from "../../redux/slices/api/transactions/transactionsApiSlice";

const HomePage = () => {
  useEffect(() => {
    document.title = "Welcome to Wallet App";
  }, []);

  const { data, isLoading } = transactionsApiSlice.useGetTransactionsQuery();

  if (isLoading) return <Loader />;

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.grid__navbar}>
          <NavBar />
        </div>
        <div className={styles.grid__balance}>
          <Balance balance={data?.statistics.balance} isLoading={isLoading} />
        </div>
        <Media query="(max-width: 767px)">
          {(matches) =>
            matches ? (
              <TransactionList
                transactions={data?.transactions}
                isLoading={isLoading}
              />
            ) : (
              <>
                <div className={styles.grid__exchange}>
                  <Exchange />
                </div>
                <div className={styles.grid__transactions}>
                  <TransactionListDesktop
                    transactions={data?.transactions}
                    isLoading={isLoading}
                  />
                </div>
              </>
            )
          }
        </Media>
      </div>

      <ButtonAdd />
    </div>
  );
};

export default HomePage;
