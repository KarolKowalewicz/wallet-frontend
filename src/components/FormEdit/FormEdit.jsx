import styles from "./FormEdit.module.scss";
import React, { useRef } from "react";
import moment from "moment";
//TODO: display error with toast notification!!!
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ReactComponent as CalendarIcon } from "../../img/calendar.svg";
import transactionsApiSlice from "../../redux/slices/api/transactions/transactionsApiSlice";

import Calendar from "../Calendar/Calendar";
import BtnSaveTrans from "../BtnSaveTrans/BtnSaveTrans";

const FormEdit = ({ validationSchema, transaction: { income, _id } }) => {
  const calendarRef = useRef(null);
  const [updateTransaction] =
    transactionsApiSlice.useUpdateTransactionMutation();

  const openCalendar = () => {
    if (calendarRef.current && calendarRef.current.openCalendar) {
      calendarRef.current.openCalendar();
    }
  };

  return (
    <Formik
      initialValues={
        income
          ? {
              amount: "",
              income: income,
              date: moment().format("YYYY-MM-DD HH:mm:ss"),
              comment: "",
            }
          : {
              category: "",
              amount: "",
              income: income,
              date: moment().format("YYYY-MM-DD HH:mm:ss"),
              comment: "",
            }
      }
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        updateTransaction({ _id, body: values });
        setSubmitting(false);
        resetForm();
      }}
    >
      {({ isSubmitting, setFieldValue, values }) => (
        <Form className={styles.form}>
          {!income && (
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
          )}

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
            diasbled={isSubmitting}
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
  );
};

export default FormEdit;
