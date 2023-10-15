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

const FormEdit = ({ validationSchema, query, income, _id }) => {
  const dispatch = useDispatch();
  const closeModall = () => dispatch(closeModal("addTransaction"));

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
              amount: "",
              income: income,
              date: moment().format("YYYY-MM-DD"),
              comment: "",
            }
          : {
              category: "",
              amount: "",
              income: income,
              date: moment().format("YYYY-MM-DD"),
              comment: "",
            }
      }
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        query(_id ? { _id, body: values } : values);
        setSubmitting(false);
        resetForm();
        closeModall();
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
                    if (typeof dateOrString === "string") {
                      const parsedDate = moment(
                        dateOrString,
                        "YYYY-MM-DD",
                        true
                      );
                      if (parsedDate.isValid()) {
                        formattedDate = parsedDate.format("YYYY-MM-DD");
                      } else {
                        formattedDate = dateOrString;
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
