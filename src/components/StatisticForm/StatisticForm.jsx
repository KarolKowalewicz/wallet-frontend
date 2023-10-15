import React from "react";
import styles from "./StatisticForm.module.scss";
import Select from "react-select";
import { Formik, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { SubmitListener } from "../../utils/formik/SubmitListener";
import { colors } from "../../utils/chart/chartColors";
import { nanoid } from "@reduxjs/toolkit";
const today = new Date();
const month = today.getMonth() + 1;
const year = today.getFullYear();

const monthsArr = [
  { value: "01", label: "January" },
  { value: "02", label: "February" },
  { value: "03", label: "March" },
  { value: "04", label: "April" },
  { value: "05", label: "May" },
  { value: "06", label: "June" },
  { value: "07", label: "July" },
  { value: "08", label: "August" },
  { value: "09", label: "September" },
  { value: "10", label: "October" },
  { value: "11", label: "November" },
  { value: "12", label: "December" },
];

const yearsArr = [
  { value: "2023", label: "2023" },
  { value: "2022", label: "2022" },
  { value: "2021", label: "2021" },
  { value: "2020", label: "2020" },
  { value: "2019", label: "2019" },
  { value: "2018", label: "2018" },
];

const StatisticForm = ({ data, isLoading, getTransactionPeriod }) => {
  //TODO: add some spinner
  if (isLoading) return <h2>Loading...</h2>;

  return (
    <>
      <div className={styles.statistic}>
        <Formik
          initialValues={{ month, year }}
          validationSchema={Yup.object({
            month: Yup.string().required("Set chosen month"),
            year: Yup.string().required("Set chosen year"),
          })}
          onSubmit={(values) => {
            getTransactionPeriod({
              period: `${values.year}-${values.month}`,
            });
          }}
        >
          {(formik) => (
            <Form className={styles.statistic__label}>
              <SubmitListener />
              <Select
                className={styles.statistic__select}
                name="month"
                options={monthsArr}
                onChange={(option) =>
                  formik.setFieldValue("month", option ? option.value : "")
                }
                defaultValue={{
                  value: month,
                  label: monthsArr[month - 1].label,
                }}
                placeholder={"Month"}
              />
              <ErrorMessage name="month" />

              <Select
                className={styles.statistic__select}
                name="year"
                options={yearsArr}
                onChange={(option) =>
                  formik.setFieldValue("year", option ? option.value : "")
                }
                defaultValue={{
                  value: year,
                  label: year,
                }}
                placeholder={"Year"}
              />
              <ErrorMessage name="year" />
            </Form>
          )}
        </Formik>

        <div className={styles.statistic__description}>
          <span>Category</span>
          <span>Sum</span>
        </div>
        <div className={styles.statistic__table}>
          <ul className={styles.statistic__list}>
            {data?.transactions.data.length > 0 ? (
              data?.transactions.data.map(({ x: category, y: amount }, i) => (
                <li key={nanoid()} className={styles.statistic__item}>
                  <div
                    className={styles.statistic__itemColor}
                    style={{ backgroundColor: `${colors[i]}` }}
                  ></div>
                  <p className={styles.statistic__itemText}>
                    {category || "Income"}
                  </p>
                  <p className={styles.statistic__itemSum}>{amount}</p>
                </li>
              ))
            ) : (
              <h2>No transactions in this time period</h2>
            )}
          </ul>
        </div>
        <div>
          <div className={styles.statistic__results}>
            <p className={styles.statistic__text}>Expenses:</p>
            <p className={styles.statistic__sum}>
              {data?.statistics.expenseSum}
            </p>
          </div>
          <div className={styles.statistic__results}>
            <p className={styles.statistic__text}>Income:</p>
            <p className={styles.statistic__sum}>
              {data?.statistics.incomeSum}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatisticForm;
