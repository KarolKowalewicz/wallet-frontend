import React, { useState, useEffect } from "react";
import styles from "./StatisticForm.module.scss";

const StatisticForm = ({ data, isLoading }) => {
  const [months, setMonths] = useState([]);
  const [years, setYears] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  useEffect(() => {
    const currentYear = new Date().getFullYear();

    const yearOptions = [];
    for (let year = currentYear; year >= currentYear - 10; year--) {}
    setYears(yearOptions);

    const monthOptions = [];
    for (let month = 1; month <= 12; month++) {
      const date = `${currentYear}-${month.toString().padStart(2, "0")}`;
      const monthName = new Date(date).toLocaleString("en", {
        month: "long",
      });
      monthOptions.push({ value: date, label: monthName });
    }
    setMonths(monthOptions);
  }, []);

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  //TODO: add some spinner
  if (isLoading) return <h2>Loading...</h2>;

  return (
    <>
      <div className={styles.statistic}>
        <div className={styles.statistic__label}>
          <select
            className={styles.statistic__select}
            id="month"
            name="month"
            value={selectedMonth}
            onChange={handleMonthChange}
          >
            <option className={styles.statistic__option} value="">
              Month
            </option>
            {months.map((month) => (
              <option key={month.value} value={month.value}>
                {month.label}
              </option>
            ))}
          </select>
          <select
            className={styles.statistic__select}
            id="year"
            name="year"
            value={selectedYear}
            onChange={handleYearChange}
          >
            <option className={styles.statistic__option} value="">
              Year
            </option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.statistic__description}>
          <span>Category</span>
          <span>Sum</span>
        </div>
        <div className={styles.statistic__table}>
          <ul className={styles.statistic__list}>
            {data.transactions.data.map((item) => (
              <li className={styles.statistic__item}>
                <div className={styles.statistic__itemColor}></div>
                <p className={styles.statistic__itemText}>
                  {item.category || "Income"}
                </p>
                <p className={styles.statistic__itemSum}>{item.amount}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className={styles.statistic__results}>
            <p className={styles.statistic__text}>Expenses:</p>
            <p className={styles.statistic__sum}>
              {data.statistics.expenseSum}
            </p>
          </div>
          <div className={styles.statistic__results}>
            <p className={styles.statistic__text}>Income:</p>
            <p className={styles.statistic__sum}>{data.statistics.incomeSum}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatisticForm;
