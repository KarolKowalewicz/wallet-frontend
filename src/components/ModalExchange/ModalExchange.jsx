import styles from './ModalExchange.module.scss'
import NavBar from '../NavBar/NavBar';
import Exchange from '../Exchange/Exchange';


const ModalExchange = () => {

    return(
        <div className={styles.exchange}>
            <div className={styles.exchange__nav}>
                <NavBar />
                <Exchange />
            </div>
        </div>
    )
}

export default ModalExchange