import React, { useEffect } from "react";
import styles from "./StatisticsPage.module.scss";
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
    <div className={styles.statistics}>
      <Diagram data={data} isLoading={isLoading} />
      <StatisticForm
        data={data}
        isLoading={isLoading}
        getTransactionPeriod={getTransactionPeriod}
      />
    </div>
  );
};

export default StatisticsPage;
