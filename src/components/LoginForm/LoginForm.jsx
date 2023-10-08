import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import authApiSlice from "../../redux/slices/api/auth/authApiSlice";

import styles from "./LoginForm.module.scss";
import logo from "./../../img/logowallet.png";

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
      <div className={styles.login}>
        <div className={styles.login__logo}>
          <img className={styles.login__logoimg} src={logo} alt="logo" />
          <h1>Wallet</h1>
        </div>
        <div>
          <form className={styles.login__form} onSubmit={formik.handleSubmit}>
            <div>
              <label className={styles.login__label}>
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_5_3524)">
                    <path
                      d="M20.5 4H4.5C3.4 4 2.51 4.9 2.51 6L2.5 18C2.5 19.1 3.4 20 4.5 20H20.5C21.6 20 22.5 19.1 22.5 18V6C22.5 4.9 21.6 4 20.5 4ZM20.5 8L12.5 13L4.5 8V6L12.5 11L20.5 6V8Z"
                      fill="#E0E0E0"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_5_3524">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>

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
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_5_3511)">
                    <path
                      d="M18.5 8H17.5V6C17.5 3.24 15.26 1 12.5 1C9.74 1 7.5 3.24 7.5 6V8H6.5C5.4 8 4.5 8.9 4.5 10V20C4.5 21.1 5.4 22 6.5 22H18.5C19.6 22 20.5 21.1 20.5 20V10C20.5 8.9 19.6 8 18.5 8ZM12.5 17C11.4 17 10.5 16.1 10.5 15C10.5 13.9 11.4 13 12.5 13C13.6 13 14.5 13.9 14.5 15C14.5 16.1 13.6 17 12.5 17ZM15.6 8H9.4V6C9.4 4.29 10.79 2.9 12.5 2.9C14.21 2.9 15.6 4.29 15.6 6V8Z"
                      fill="#E0E0E0"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_5_3511">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>

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
                  {/* TODO: maybe add some loading spinner instead of plain text */}
                  {isLoading ? "Loading..." : "Login"}
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
    </div>
  );
};

export default LoginForm;
