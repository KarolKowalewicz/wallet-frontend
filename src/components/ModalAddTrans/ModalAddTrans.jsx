import styles from './ModalAddTrans.module.scss'
import { ReactComponent as Close } from './../../img/close-modal.svg';


const ModalAddTrans = ({onClose}) => {

    return(
        <div className={styles.overlay}>
            <div className={styles.content}>
                <div className={styles.divBtn}>
                    <Close  className={styles.btn} onClick={onClose} />
                </div>
                <p>AddTransaction</p>

            </div>
            
        </div>
    )
}

export default ModalAddTrans