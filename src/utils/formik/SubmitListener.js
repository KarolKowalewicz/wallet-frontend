import { useState, useEffect } from "react";
import { useFormikContext } from "formik";

export const SubmitListener = () => {
  const formik = useFormikContext();
  const [lastValues, updateState] = useState(formik.values);

  useEffect(() => {
    const valuesEqualLastValues = lastValues === formik.values;
    const valuesEqualInitialValues = formik.values === formik.initialValues;

    if (!valuesEqualLastValues) {
      updateState(formik.values);
    }

    if (!valuesEqualLastValues && !valuesEqualInitialValues) {
      formik.submitForm();
    }
  }, [formik.values, formik.initialValues]);

  return null;
};
