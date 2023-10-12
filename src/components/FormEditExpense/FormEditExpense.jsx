import React, { useRef } from "react";

import styles from "./FormEditExpense.module.scss";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import moment from "moment";

import BtnSaveTrans from "../BtnSaveTrans/BtnSaveTrans";
import Calendar from "../Calendar/Calendar";
import { ReactComponent as CalendarIcon } from "../../img/calendar.svg";
import transactionsApiSlice from "../../redux/slices/api/transactions/transactionsApiSlice";

const validationSchema = Yup.object().shape({
  category: Yup.string().required("Category is required"),
  amount: Yup.number()
    .typeError("Amount must be a number")
    .positive("Amount must be positive")
    .max(9999999, "Amount too large")
    .required("Amount is required"),
  date: Yup.date()
    .max(moment(), "Date cannot be in the future")
    .required("Date is required"),
  comment: Yup.string(),
});

const FormEditExpense = ({ transactionId }) => {
  const [updateTransaction] =
    transactionsApiSlice.useUpdateTransactionMutation();
  const calendarRef = useRef(null);

  const openCalendar = () => {
    if (calendarRef.current && calendarRef.current.openCalendar) {
      calendarRef.current.openCalendar();
    }
  };

  return (
    <div>
      <div className={styles.typeOfTransHead}>
        <p className={styles.incomeLabel}>income</p>
        <p className={styles.slashLabel}>/</p>
        <p className={styles.expenseLabel}>expense</p>
      </div>
      <Formik
        initialValues={{
          category: "",
          amount: "",
          income: false,
          date: moment().format("YYYY-MM-DD HH:mm:ss"),
          comment: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          updateTransaction({ _id: transactionId, body: values });
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ isSubmitting, setFieldValue, values }) => (
          <Form className={styles.form}>
            <div>
              <Field className={styles.input} as="select" name="category">
                <option value="" label="Select category" />
                <option value="Products">Products</option>
                <option value="Main expenses">Main expenses</option>
                <option value="Car">Car</option>
                <option value="Self care">Self care</option>
                <option value="Child care">Child care</option>
                <option value="Household products">Household products</option>
                <option value="Education">Education</option>
                <option value="Leisure">Leisure</option>
                <option value="Other expenses">Other expenses</option>
                <option value="Entertaiment">Entertaiment</option>
              </Field>
              <ErrorMessage name="category" />
            </div>

            <div className={styles.separatorShort}></div>

            <div>
              <Field
                className={styles.input}
                name="amount"
                type="number"
                placeholder="0.00"
                autoComplete="off"
              />
              <ErrorMessage name="amount" />
            </div>

            <div className={styles.separatorShort}></div>

            <div>
              <div className={styles.calendarWrap}>
                <Calendar
                  ref={calendarRef}
                  value={values.date}
                  onChange={(date) =>
                    setFieldValue("date", date.format("YYYY-MM-DD HH:mm:ss"))
                  }
                  name="date"
                />

                <CalendarIcon
                  onClick={openCalendar}
                  className={styles.calendarIcon}
                />
              </div>
              <ErrorMessage name="date" />
            </div>

            <div className={styles.separatorShort}></div>

            <div>
              <Field
                as="textarea"
                className={`${styles.input} ${styles.input__comment}`}
                name="comment"
                placeholder="Comment"
                autoComplete="off"
              />
              <ErrorMessage name="comment" />
            </div>

            <div className={styles.separatorLong}></div>

            <BtnSaveTrans
              onSubmit={
                isSubmitting
                  ? null
                  : () =>
                      document
                        .querySelector("form")
                        .dispatchEvent(new Event("submit"))
              }
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormEditExpense;
