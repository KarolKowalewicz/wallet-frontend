import { useRef, useState, useEffect } from "react";
import Select from "react-select";

import styles from "./FormExpense.module.scss";

import { getDeviceConfig } from "../FormExpenseStyles/inputCategoryStyles";
import { stylesForDevice } from "../FormExpenseStyles/inputCategoryStyles";

import { categoryOptions } from "../FormCategoryExpense/formCategoryExpense";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import moment from "moment";

import Calendar from "../Calendar/Calendar";
import { ReactComponent as CalendarIcon } from "../../img/calendar.svg";
import SelectArrow from "../SelectArrow/SelectArrow";

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

const DropdownIndicator = (props) => {
  return (
    <SelectArrow {...props} isMenuOpen={props.selectProps.menuIsOpen} />
  );
};

const FormExpense = ({ onClose }) => {

  // set styles for diffrent devices *BEGIN*
  const [device, setDevice] = useState(getDeviceConfig(window.innerWidth));
  
  const currentStyle = stylesForDevice[device];
  
  useEffect(() => {
    const handleResize = () => {
      setDevice(getDeviceConfig(window.innerWidth));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  // set styles for diffrent devices *END*

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
        onClose();
      }}
    >
      {({ isSubmitting, setFieldValue, values }) => (
        <Form className={styles.form}>
          <div>
            <Select
              styles={currentStyle}
              options={categoryOptions}
              value={categoryOptions.find(
                (option) => option.value === values.category
              )}
              onChange={(option) =>
                setFieldValue("category", option ? option.value : "")
              }
              classNamePrefix="react-select"
              placeholder="Select category"
              components={{DropdownIndicator}}
            />
            <ErrorMessage name="category" />
          </div>

          <div className={styles.separatorLong}></div>

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
