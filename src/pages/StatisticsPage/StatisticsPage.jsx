import React from "react";
import Media from "react-media";
import styles from "./StatisticsPage.module.scss";
import Balance from "../../components/Balance/Balance";

import StatisticForm from "../../components/StatisticForm/StatisticForm";
import NavBar from "../../components/NavBar/NavBar";
import Exchange from "../../components/Exchange/Exchange";
import DiagramForm from "../../components/Diagram/Diagram";
import { useEffect } from "react";
import transactionsApiSlice from "../../redux/slices/api/transactions/transactionsApiSlice";

const StatisticsPage = () => {
  useEffect(() => {
    document.title = "Statistics";
  }, []);

  const { data, isLoading } = transactionsApiSlice.useGetTransactionsQuery();

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
                  balance={data?.statistics.balance}
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
            <DiagramForm data={data} isLoading={isLoading} />
            <StatisticForm data={data} isLoading={isLoading} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsPage;
