import styles from "./FormEdit.module.scss";
import { useRef, useState, useEffect } from "react";
import moment from "moment";
//TODO: display error with toast notification!!!
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ReactComponent as CalendarIcon } from "../../img/calendar.svg";

import Calendar from "../Calendar/Calendar";
import BtnSaveTrans from "../BtnSaveTrans/BtnSaveTrans";

import Select from "react-select";

import { getDeviceConfig } from "../FormExpenseStyles/inputCategoryStyles";
import { stylesForDevice } from "../FormExpenseStyles/inputCategoryStyles";

import { categoryOptions } from "../FormCategoryExpense/formCategoryExpense";

import SelectArrow from "../SelectArrow/SelectArrow";

import { useDispatch } from "react-redux";
import { closeModal } from "../../redux/slices/modal/modalSlice";

const DropdownIndicator = (props) => {
  return <SelectArrow {...props} isMenuOpen={props.selectProps.menuIsOpen} />;
};

const FormEdit = ({
  validationSchema,
  query,
  income,
  _id,
  transaction = {},
}) => {
  const dispatch = useDispatch();

  // set styles for diffrent devices on input category *BEGIN*
  const [device, setDevice] = useState(getDeviceConfig(window.innerWidth));

  const currentStyle = stylesForDevice[device];

  useEffect(() => {
    const handleResize = () => {
      setDevice(getDeviceConfig(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // set styles for diffrent devices on input category *END*

  const calendarRef = useRef(null);

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
              amount: transaction.amount || "",
              income: income,
              date: transaction.date
                ? moment(transaction.date).format("YYYY-MM-DD")
                : moment().format("YYYY-MM-DD"),
              comment: transaction.comment || "",
            }
          : {
              category: transaction.category || "",
              amount: transaction.amount || "",
              income: income,
              date: transaction.date
                ? moment(transaction.date).format("YYYY-MM-DD")
                : moment().format("YYYY-MM-DD"),
              comment: transaction.comment || "",
            }
      }
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        query(_id ? { _id, body: values } : values);

        if (_id) {
          toast.success("Transaction updated successfully!");
        } else {
          toast.success("Transaction added successfully!");
        }

        setSubmitting(false);
        resetForm();

        if (_id) {
          dispatch(closeModal(`${_id}edit`));
        } else {
          dispatch(closeModal("addTransaction"));
        }
      }}
    >
      {({ isSubmitting, setFieldValue, values }) => (
        <Form className={styles.form}>
          {!income && (
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
                components={{ DropdownIndicator }}
              />
              <div className={styles.separatorLong}></div>
              <ErrorMessage name="category" />
            </div>
          )}

          <div className={styles.amountCalendarWrap}>
            <div>
              <Field
                className={styles.input}
                name="amount"
                type="number"
                placeholder="0.00"
                autoComplete="off"
                step="any"
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
                  onChange={(dateOrString) => {
                    let formattedDate;
                    if (typeof dateOrString === "string") {
                      const parsedDate = moment(dateOrString, "YYYY-MM-DD");
                      if (parsedDate.isValid()) {
                        formattedDate = parsedDate.format("YYYY-MM-DD");
                      } else {
                        formattedDate = moment().format("YYYY-MM-DD");
                      }
                    } else {
                      formattedDate = dateOrString.format("YYYY-MM-DD");
                    }
                    setFieldValue("date", formattedDate);
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
              step="any"
            />
            <div className={styles.separatorLong}></div>
            <ErrorMessage name="comment" />
          </div>

          <BtnSaveTrans
            disabled={isSubmitting}
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
