import styles from "./Loader.module.scss";
import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <RotatingLines strokeColor="#7079e3" />
    </div>
  );
};
export default Loader;
