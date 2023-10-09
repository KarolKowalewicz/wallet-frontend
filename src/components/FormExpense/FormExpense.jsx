import React, { useRef } from 'react';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';

import BtnAddTrans from '../BtnAddTrans/BtnAddTrans';
import Calendar from '../Calendar/Calendar';
import { ReactComponent as CalendarIcon } from '../../img/calendar.svg';

const validationSchema = Yup.object().shape({
    category: Yup.string().required('Category is required'),
    amount: Yup.number()
        .typeError('Amount must be a number')
        .positive('Amount must be positive')
        .max(9999999, 'Amount too large')
        .required('Amount is required'),
    date: Yup.date()
        .max(moment(), "Date cannot be in the future")
        .required('Date is required'),
    comment: Yup.string(),
});

const FormExpense = () => {
    const calendarRef = useRef(null);

    const openCalendar = () => {
        if (calendarRef.current && calendarRef.current.openCalendar) {
            calendarRef.current.openCalendar();
        }
    }

    return (
        <Formik
            initialValues={{
                category: '',
                amount: '',
                date: moment(),
                comment: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                console.log(values);
                setSubmitting(false);
                resetForm();
            }}
        >
            {({ isSubmitting, setFieldValue, values }) => (
                <Form>
                    <div>
                        <Field as="select" name="category">
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
                        {/* <ErrorMessage name="category" /> */}
                    </div>

                    <div>
                        <Field name="amount" type="number" step="0.01" placeholder="0.00" />
                        {/* <ErrorMessage name="amount" /> */}
                    </div>

                    <div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Calendar 
                                ref={calendarRef}
                                value={values.date}
                                onChange={(date) => setFieldValue('date', date)}
                            />
                            <CalendarIcon onClick={openCalendar} style={{ cursor: 'pointer', marginLeft: '10px' }} />
                        </div>
                        {/* <ErrorMessage name="date" /> */}
                    </div>
                    
                    <div>
                        <Field name="comment" type="text" placeholder="Comment" />
                        {/* <ErrorMessage name="comment" /> */}
                    </div>

                    <BtnAddTrans onSubmit={isSubmitting ? null : () => document.querySelector('form').dispatchEvent(new Event('submit'))} />
                </Form>
            )}
        </Formik>
    );
};

export default FormExpense;
