import Balance from "../../components/Balance/Balance"
import ButtonAdd from "../../components/ButtonAdd/ButtonAdd"
import styles from './HomePage.module.scss';
import NavBar from "./../../components/NavBar/NavBar";



const HomePage = () => {

    return (
      <div className={styles.container}>
        HomePage
        <p>UserMenu-buttony-kafelki</p>
        <NavBar />
        <Balance />
        <p>Tabela</p>
        <ButtonAdd className={styles.btnAdd} />
      </div>
    );
}

export default HomePage