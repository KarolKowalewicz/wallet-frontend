import css from "./RegisterForm.module.scss";
import logo from "../../img/logowallet.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import authApiSlice from "../../redux/slices/api/auth/authApiSlice";
import PasswordStrengthBar from 'react-password-strength-bar';

import { ReactComponent as Avatar } from "../../img/avatar.svg";
import { ReactComponent as Lock } from "../../img/lock.svg";
import { ReactComponent as Email } from "../../img/email.svg"; 

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .max(12, "Password must be at most 12 characters")
    .required("Password is required"),
  'confirm-password': Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  name: Yup.string()
    .min(1, "Name must be at least 1 character")
    .max(12, "Name must be at most 12 characters")
    .required("Name is required"),
});

const RegisterForm = () => {
  const navigate = useNavigate();
  const [register, { isLoading, error }] = authApiSlice.useRegisterMutation();

  const handleSubmit = async (values) => {
    const { email, password, name } = values;
    const result = await register({ email, password, name });
    if ("error" in result) {
      console.log(error);
    } else {
      console.log("register successful, you can now login");
      navigate("/login");
      navigate(0);
    }
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        'confirm-password': '', 
        name: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, values }) => (
        <Form>
          <div className={css.formBox}>
            <div className={css.logoSection}>
              <img src={logo} className={css.logoSection__logoImg} alt="wallet" />
              <span className={css.logoSection__logoTitle}>Wallet</span>
            </div>
            <div className={css.form}>
              <label className={css.form__label}>
                <Email className={css.form__svg} />
                <Field
                  className={css.form__input}
                  placeholder="E-mail"
                  type="email"
                  name="email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={css.error}
                />
              </label>
              <label className={css.form__label}>
                <Lock className={css.form__svg} />
                <Field
                  className={css.form__input}
                  placeholder="Password"
                  type="password"
                  name="password"
                
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className={css.error}
                />
              </label>
              <label className={css.form__label}>
                <Lock className={css.form__svg} />
                <Field
                  className={css.form__input}
                  placeholder="Confirm Password"
                  type="password"
                  name="confirm-password"
                
                />
                <ErrorMessage
                  name="confirm-password"
                  component="div"
                  className={css.error}
                />
              </label>
              <PasswordStrengthBar
                className={css.form__passwordStrength}
                password={values.password}
              /> 
              <label className={css.form__label}>
                <Avatar className={css.form__svg} />
                <Field
                  className={css.form__input}
                  placeholder="First name"
                  type="text"
                  name="name"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className={css.error}
                />
              </label>
              <div className={css.form__buttonSection}>
                <button
                  className={css.form__button}
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "REGISTER"}
                </button>
                <Link
                  to="/login"
                  className={css.form__buttonLogin}
                  disabled={isLoading}
                >
                  LOGIN
                </Link>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
