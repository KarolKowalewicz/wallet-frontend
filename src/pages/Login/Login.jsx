import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import styles from "./Login.module.scss";
import upperEllipse from "../../img/Ellipse2.png";
import frame from "../../img/Frame.png";
import lowerEllipse from "../../img/Ellipse1.png";

const Login = () => {
  return (
    <div className={styles.loginPage}>
            <div className={styles.backdrop}>
        <img src={frame} alt="frame" className={styles.loginPage__frame} />
      </div>
      <div className={styles.login}>
      {/* <div className={styles.backdrop}>
        <img src={frame} alt="frame" className={styles.loginPage__frame} />
      </div> */}
<LoginForm />
</div>
       

        <img
          src={upperEllipse}
          alt="ellipse"
          className={styles.loginPage__ellipse}
        />

      <img
        src={lowerEllipse}
        alt="ellipse"
        className={styles.loginPage__lowerEllipse}
      />
      <div className={styles.loginPage__title}>Finance App</div>
      <div className={styles.login}>
      
      </div>
    </div>
  );
};

export default Login;
