import * as Yup from "yup";
import moment from "moment";

const FormIncomeValidation = Yup.object().shape({
  amount: Yup.number()
    .typeError("Amount must be a number")
    .positive("Amount should be positive")
    .required("Amount is required")
    .max(999999999, "Amount is too large"),
  date: Yup.string()
    .required("Date is required")
    .test("is-valid-date", "Date is not valid", (value) => {
      const date = moment(value, "DD.MM.YYYY", true);
      return date.isValid();
    })
    .test("is-not-future-date", "Date cannot be in the future", (value) => {
      const date = moment(value, "DD.MM.YYYY", true);
      return date.isSameOrBefore(moment().endOf("day"));
    }),
  comment: Yup.string(),
});

export default FormIncomeValidation;
