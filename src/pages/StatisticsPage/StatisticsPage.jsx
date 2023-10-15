import React, { useEffect } from "react";
import Media from "react-media";
import styles from "./StatisticsPage.module.scss";
import Balance from "../../components/Balance/Balance";
import NavBar from "../../components/NavBar/NavBar";
import Exchange from "../../components/Exchange/Exchange";
import Diagram from "../../components/Diagram/Diagram";
import StatisticForm from "../../components/StatisticForm/StatisticForm";
import transactionsApiSlice from "../../redux/slices/api/transactions/transactionsApiSlice";

const StatisticsPage = () => {
  const [getTransactionPeriod, { data, isLoading }] =
    transactionsApiSlice.useLazyGetPeriodTransactionsQuery();

  useEffect(() => {
    document.title = "Statistics";
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    getTransactionPeriod({ period: `${year}-${month}` });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.gridstat}>
        <div className={styles.gridstat__navbar}>
          <NavBar />
        </div>

        <Media query="(min-width: 768px)">
          {(matches) =>
            matches ? (
              <div className={styles.gridstat__balance}>
                <Balance
                  balance={data?.statistics.balance.toFixed(2)}
                  isLoading={isLoading}
                />
              </div>
            ) : null
          }
        </Media>

        <Media query="(min-width: 768px)">
          {(matches) =>
            matches ? (
              <div className={styles.gridstat__exchange}>
                <Exchange />
              </div>
            ) : null
          }
        </Media>
        <div className={styles.gridstat__diagram}>
          <h3 className={styles.gridstat__diagramname}>Statistics</h3>
          <div className={styles.gridstat__forms}>
            <Diagram data={data} isLoading={isLoading} />
            <StatisticForm
              data={data}
              isLoading={isLoading}
              getTransactionPeriod={getTransactionPeriod}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsPage;
