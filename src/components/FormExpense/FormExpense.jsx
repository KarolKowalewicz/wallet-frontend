import { useRef } from "react";
import Select from "react-select";

import styles from "./FormExpense.module.scss";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import moment from "moment";

import Calendar from "../Calendar/Calendar";
import { ReactComponent as CalendarIcon } from "../../img/calendar.svg";

import BtnAddTrans from "../BtnAddTrans/BtnAddTrans";

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

const categoryOptions = [
  // { value: '', label: 'Select category' },
  { value: "Products", label: "Products" },
  { value: "Main expenses", label: "Main expenses" },
  { value: "Car", label: "Car" },
  { value: "Self care", label: "Self care" },
  { value: "Child care", label: "Child care" },
  { value: "Household products", label: "Household products" },
  { value: "Education", label: "Education" },
  { value: "Leisure", label: "Leisure" },
  { value: "Other expenses", label: "Other expenses" },
  { value: "Entertainment", label: "Entertainment" },
];

const inputCategoryStyles = {
  container: (provided) => ({
    ...provided,
    marginLeft: "40px",
    padding: "0",
  }),
  inputContainer: (provided) => ({
    ...provided,
    margin: "0",
    padding: "0",
  }),
  input: (provided) => ({
    ...provided,
    margin: "0",
    padding: "0",
    color: "#000",
    fontFamily: "Circe",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal,",
  }),
  selectInput: (provided) => ({
    ...provided,
    // margin: '0',
    // padding: '0',
    color: "red",
    // fontFamily: 'Circe',
    // fontSize: '18px',
    // fontStyle: 'normal',
    // fontWeight: '400',
    // lineHeight: 'normal,'
  }),
  valueContainer: (provided) => ({
    ...provided,
    margin: "0",
    padding: "0",
  }),
  control: (provided) => ({
    ...provided,
    width: "190px",
    height: "24px",
    flexShrink: 0,
    // color: '#BDBDBD',
    color: "#000",
    fontFamily: "Circe",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    backgroundColor: "transparent",
    border: "none",
    boxShadow: "none",
  }),
  menu: (provided) => ({
    ...provided,
    width: "280px",
    // height: '',
    flexShrink: 0,
    borderRadius: "20px",
    background: "rgba(255, 255, 255, 0.70)",
    boxShadow: "0px 6px 15px 0px rgba(0, 0, 0, 0.10)",
    backdropFilter: "blur(25px)",
  }),
  option: (provided, state) => ({
    ...provided,
    fontFamily: "Circe",
    fontSize: "18px",
    fontWeight: 400,
    color: state.isSelected ? "white" : "#BDBDBD", // Możesz dostosować kolory dla wybranych i niezaznaczonych opcji
  }),
  singleValue: (provided) => ({
    ...provided,
    fontFamily: "Circe",
    fontSize: "18px",
    fontWeight: 400,
    color: "#000",
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),
};

const FormExpense = () => {
  const [addTransaction] = transactionsApiSlice.useAddTransactionMutation();
  const calendarRef = useRef(null);

  const openCalendar = () => {
    if (calendarRef.current && calendarRef.current.openCalendar) {
      calendarRef.current.openCalendar();
    }
  };

  return (
    <Formik
      initialValues={{
        category: "",
        amount: "",
        date: moment().format("YYYY-MM-DD"),
        comment: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        addTransaction({
          income: false,
          amount: values.amount,
          category: values.category,
          date: values.date,
          comment: values.comment,
        });
        setSubmitting(false);
        resetForm();
      }}
    >
      {({ isSubmitting, setFieldValue, values }) => (
        <Form className={styles.form}>
          <div>
            <Select
              styles={inputCategoryStyles}
              options={categoryOptions}
              value={categoryOptions.find(
                (option) => option.value === values.category
              )}
              onChange={(option) =>
                setFieldValue("category", option ? option.value : "")
              }
              classNamePrefix="react-select"
              placeholder="Select category"
            />
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

          <BtnAddTrans
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

export default FormExpense;
