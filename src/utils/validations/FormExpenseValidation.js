import * as Yup from "yup";
import moment from "moment";

const FormExpenseValidation = Yup.object().shape({
  category: Yup.string().required("Category is required"),
  amount: Yup.number()
    .typeError("Amount must be a number")
    .positive("Amount must be positive")
    .max(9999999, "Amount too large")
    .required("Amount is required"),
  date: Yup.string()
    .required("Date is required")
    .test("is-valid-date", "Date is not valid", (value) => {
      const date = moment(value, "DD.MM.YYYY", true);
      return date.isValid();
    })
    .test("is-not-future-date", "Date cannot be in the future", (value) => {
      const date = moment(value, "DD.MM.YYYY", true);
      return date.isSameOrBefore(moment());
    }),
  comment: Yup.string(),
});

export default FormExpenseValidation;
