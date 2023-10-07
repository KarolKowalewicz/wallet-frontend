import Balance from "../../components/Balance/Balance"
import ButtonAdd from "../../components/ButtonAdd/ButtonAdd"
import Exchange from "../../components/Exchange/Exchange";
import NavBar from "../../components/NavBar/NavBar";
import styles from './HomePage.module.scss';



const HomePage = () => {

    return(
        <div className={styles.container}>HomePage
            <p>UserMenu-buttony-kafelki</p>
            <NavBar />
            <Balance />
            <p>Tabela</p>
            <Exchange />
            <ButtonAdd className={styles.btnAdd}/>

        </div>
    )
}

export default HomePage