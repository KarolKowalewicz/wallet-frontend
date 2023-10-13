import { useRef } from "react";

import styles from "./FormEditIncome.module.scss";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import moment from "moment";

import Calendar from "../Calendar/Calendar";
import { ReactComponent as CalendarIcon } from "../../img/calendar.svg";

import BtnSaveTrans from "../BtnSaveTrans/BtnSaveTrans";

import transactionsApiSlice from "../../redux/slices/api/transactions/transactionsApiSlice";

// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const validationSchema = Yup.object().shape({
  amount: Yup.number("Enter a valid amount")
    .positive("Amount should be positive")
    .required("Amount is required")
    .max(999999999, "Amount is too large")
    .typeError("Amount must be a number"),
  date: Yup.date()
    .max(moment().endOf("day"), "Date cannot be in the future")
    .required("Date is required"),
  comment: Yup.string(),
});

const FormEditIncome = ({ transactionId, onClose }) => {
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
        <p className={`${styles.transLabel} ${styles.transLabel__income}`}>Income</p>
        <p className={`${styles.transLabel} ${styles.transLabel__slash}`}>/</p>
        <p className={styles.transLabel}>Expense</p>
      </div>
      <Formik
        initialValues={{
          amount: "",
          income: true,
          date: moment().format("YYYY-MM-DD"),
          comment: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          updateTransaction({ _id: transactionId, body: values });
          setSubmitting(false);
          resetForm();
          onClose();
        }}
      >
        {({ isSubmitting, setFieldValue, values }) => (
          <Form className={styles.form}>
            <div className={styles.amountCalendarWrap}>
            <div>
              <Field
                className={styles.input}
                name="amount"
                type="number"
                placeholder="0.00"
                autoComplete="off"
              />
              <ErrorMessage name="amount" />
              <div className={styles.separatorShort}></div>
            </div>

            <div>
              <div className={styles.calendarWrap}>
              <Calendar
                ref={calendarRef}
                value={values.date}
                name="date"
                // onChange={(date) =>
                //   setFieldValue("date", date.format("YYYY-MM-DD HH:mm:ss"))
                // }
                onChange={(dateOrString) => {
                  let formattedDate;
                  if (typeof dateOrString === 'string') {
                      const parsedDate = moment(dateOrString, 'YYYY-MM-DD', true);
                      if (parsedDate.isValid()) {
                        formattedDate = parsedDate.format('YYYY-MM-DD');
                      } else {
                        formattedDate = dateOrString;
                      }
                    } else {
                      formattedDate = dateOrString.format('YYYY-MM-DD');
                  }
                  setFieldValue('date', formattedDate);
                }}
              />

                <CalendarIcon
                  onClick={openCalendar}
                  className={styles.calendarIcon}
                />
              </div>
              <div className={styles.separatorShort}></div>
              <ErrorMessage name="date" />
            </div>
            </div>

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

export default FormEditIncome;

