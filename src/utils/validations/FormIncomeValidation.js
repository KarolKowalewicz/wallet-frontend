import * as Yup from "yup";
import moment from "moment";

const FormIncomeValidation = Yup.object().shape({
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

export default FormIncomeValidation;
