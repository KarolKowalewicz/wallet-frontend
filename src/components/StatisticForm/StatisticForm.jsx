import React, { useState, useEffect } from "react";
import styles from "./StatisticForm.module.scss";
import Diagram from "../Diagram/Diagram";



const StatisticForm = () => {
  const [months, setMonths] = useState([]);
  const [years, setYears] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  useEffect(() => {


    const currentYear = new Date().getFullYear();

    

    const yearOptions = [];
    for (let year = currentYear; year >= currentYear - 10; year--) {
      yearOptions.push(year);
    }
    setYears(yearOptions);

    const monthOptions = [];
    for (let month = 1; month <= 12; month++) {
      const date = `${currentYear}-${month.toString().padStart(2, "0")}`;
      const monthName = new Date(date).toLocaleString("default", {
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

  return (
    <div className={styles.container}>
      <div className={styles.statistic}>
        <h1 className={styles.statistic__name}>Statistics</h1>
        <Diagram />
        <div className={styles.statistic__label}>
          <select
            className={styles.statistic__select}
            id="month"
            name="month"
            value={selectedMonth}
            onChange={handleMonthChange}
          >
            <option value="">Month</option>
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
            <option value="">Year</option>
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
            <li className={styles.statistic__item}>
              <div className={styles.statistic__itemColor}></div>
              <p className={styles.statistic__itemText}>Main expenses</p>
              <p className={styles.statistic__itemSum}>8 700.00</p>
            </li>
            <li className={styles.statistic__item}>
              <div className={styles.statistic__itemColor}></div>
              <p className={styles.statistic__itemText}>Main expenses</p>
              <p className={styles.statistic__itemSum}>8 700.00</p>
            </li>
            <li className={styles.statistic__item}>
              <div className={styles.statistic__itemColor}></div>
              <p className={styles.statistic__itemText}>Main expenses</p>
              <p className={styles.statistic__itemSum}>8 700.00</p>
            </li>
            <li className={styles.statistic__item}>
              <div className={styles.statistic__itemColor}></div>
              <p className={styles.statistic__itemText}>Main expenses</p>
              <p className={styles.statistic__itemSum}>8 700.00</p>
            </li>
            <li className={styles.statistic__item}>
              <div className={styles.statistic__itemColor}></div>
              <p className={styles.statistic__itemText}>Main expenses</p>
              <p className={styles.statistic__itemSum}>8 700.00</p>
            </li>

            <li className={styles.statistic__item}>
              <div className={styles.statistic__itemColor}></div>
              <p className={styles.statistic__itemText}>Main expenses</p>
              <p className={styles.statistic__itemSum}>8 700.00</p>
            </li>
          </ul>
        </div>
        <div>
            <div className={styles.statistic__results}>
                <p className={styles.statistic__text}>Expenses:</p>
                <p className={styles.statistic__sum}>22 549.24</p>
            </div>
            <div className={styles.statistic__results}>
                <p className={styles.statistic__text}>Income:</p>
                <p className={styles.statistic__sum}>27 350.00</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticForm;
