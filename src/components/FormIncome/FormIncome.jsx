import React, { useRef } from 'react';

import styles from './FormIncome.module.scss'

import { useFormik } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import BtnAddTrans from '../BtnAddTrans/BtnAddTrans';
// import BtnCancelTrans from '../BtnCancelTrans/BtnCancelTrans';
import Calendar from '../Calendar/Calendar';
import { ReactComponent as CalendarIcon } from '../../img/calendar.svg';

const validationSchema = Yup.object().shape({
    amount: Yup
        .number('Enter a valid amount')
        .positive('Amount should be positive')
        .required('Amount is required')
        .max(999999999, 'Amount is too large')
        .typeError('Amount must be a number'),
    date: Yup
        .date()
        .max(moment().endOf('day'), 'Date cannot be in the future')
        .required('Date is required'),
    comment: Yup.string()
});

const FormIncome = () => {
    const formik = useFormik({
        initialValues: {
            amount: '',
            date: moment(),
            comment: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            if (formik.errors.amount) {
                toast.error(formik.errors.amount);
            }
            if (formik.errors.date) {
                toast.error(formik.errors.date);
            }
            if (formik.errors.comment) {
                toast.error(formik.errors.comment);
            }
            if (!formik.errors.amount && !formik.errors.date && !formik.errors.comment) {
                console.log('income info', values);
            }
        },
    });

    const calendarRef = useRef(null);

    const openCalendar = () => {
        if (calendarRef.current && calendarRef.current.openCalendar) {
            calendarRef.current.openCalendar();
        }
    }

    return (
        // <div className={styles.formWrap}>
        <form className={styles.form} onSubmit={formik.handleSubmit}>
            <div>
                <input 
                    className={styles.input}
                    type="number"
                    name="amount"
                    value={formik.values.amount}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder='0.00'
                />
                {/* {formik.touched.amount && formik.errors.amount ? <div>{formik.errors.amount}</div> : null} */}
            </div>

            <div className={styles.separatorShort}></div>
            
            <div>
                <div className={styles.calendarWrap}>
                <Calendar 
                    // className={styles.input}
                    ref={calendarRef}
                    value={formik.values.date}
                    onChange={(date) => formik.setFieldValue('date', date)}
                />
                <CalendarIcon onClick={openCalendar} style={{ cursor: 'pointer' }} />
                </div>
                {/* {formik.touched.date && formik.errors.date ? <div>{formik.errors.date}</div> : null} */}
            </div>

            <div className={styles.separatorShort}></div>

            <div>
                <input 
                    className={styles.input}
                    type="text"
                    name="comment"
                    value={formik.values.comment}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder='Comment'
                />
                {/* {formik.touched.comment && formik.errors.comment ? <div>{formik.errors.comment}</div> : null} */}
            </div>

            <div className={styles.separatorShort}></div>

            <BtnAddTrans onSubmit={formik.handleSubmit} />
        </form>
        // </div>
    );
};

export default FormIncome;

