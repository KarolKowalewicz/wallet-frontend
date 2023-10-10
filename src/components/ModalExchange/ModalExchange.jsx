import styles from './ModalExchange.module.scss'
import { ReactComponent as Close } from './../../img/close-modal.svg';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import Exchange from '../Exchange/Exchange';


const ModalExchange = ({onClose}) => {

    return(
        <div className={styles.exchange}>
            <div className={styles.exchange__nav}>
                <NavBar />
                <Exchange />
            </div>
        </div>
        // <div className={styles.overlay}>
        //     <div className={styles.content}>
        //         {/* <div className={styles.divBtn}>
        //             <Close  className={styles.btn} onClick={onClose} />
        //         </div> */}
        //         <div>
        //             <Header />
        //             <NavBar />
        //             <Exchange />
        //         </div>
                
        //     </div>
            
        // </div>
    )
}

export default ModalExchange