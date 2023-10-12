import * as Yup from "yup";
import moment from "moment";

const FormExpenseValidation = Yup.object().shape({
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

export default FormExpenseValidation;
