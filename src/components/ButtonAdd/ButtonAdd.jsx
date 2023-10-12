import styles from "./ButtonAdd.module.scss";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/slices/modal/modalSlice";
import { ReactComponent as ButtonPlus } from "./../../img/+ btn.svg";
import AddTransaction from "../AddTransaction/AddTransaction";

const ButtonAdd = () => {
  const dispatch = useDispatch();
  return (
    <>
      <ButtonPlus
        className={styles.buttonAdd}
        onClick={() => dispatch(openModal("addTransaction"))}
      />
      <AddTransaction />
    </>
  );
};

export default ButtonAdd;
