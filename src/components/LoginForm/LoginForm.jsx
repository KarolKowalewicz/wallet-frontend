import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import authApiSlice from "../../redux/slices/api/auth/authApiSlice";

import styles from "./LoginForm.module.scss";
import logo from "./../../img/logowallet.png";
import { ReactComponent as Lock } from "../../img/lock.svg";
import { ReactComponent as Email } from "../../img/email.svg";
import { RotatingLines } from "react-loader-spinner";

const LoginForm = () => {
  const navigate = useNavigate();

  const [login, { isLoading, error }] = authApiSlice.useLoginMutation();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .max(12, "Password must be less than 13 characters")
        .required("Password is required"),
    }),

    onSubmit: async (values) => {
      const result = await login(values);
      if ("error" in result) {
        //TODO: display in toast or something
        console.log(error);
      } else {
        //TODO: display in toast or something
        console.log("logged in successful");
        navigate("/");
        navigate(0);
      }
    },
  });

  return (
    <div className={styles.container}>
      {/* <div>
      <img src={frame} alt="frame" className={styles.frame} /> */}
      <div className={styles.login}>
        <div className={styles.login__logo}>
          <img className={styles.login__logoimg} src={logo} alt="logo" />
          <h1>Wallet</h1>
        </div>
        <div>
          <form className={styles.login__form} onSubmit={formik.handleSubmit}>
            <div>
              <label className={styles.login__label}>
                <Email className={styles.login__icon} />

                <input
                  className={styles.login__input}
                  type="text"
                  name="email"
                  placeholder="E-mail"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className={styles.error}>{formik.errors.email}</div>
                ) : null}
              </label>
            </div>
            <div>
              <label className={styles.login__label}>
                <Lock className={styles.login__icon} />

                <input
                  className={styles.login__input}
                  type="password"
                  name="name"
                  placeholder="Password"
                  {...formik.getFieldProps("password")}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className={styles.error}>{formik.errors.password}</div>
                ) : null}
              </label>
            </div>
            <div className={styles.login__buttons}>
              <div className={styles.login__btn}>
                <button
                  className={styles.login__button}
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? <RotatingLines width="20" /> : "Login"}
                </button>
              </div>
              <div className={styles.login__btn}>
                <Link
                  to="/register"
                  className={styles.login__link}
                  disabled={isLoading}
                >
                  Register
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default LoginForm;
