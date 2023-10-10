import styles from './BtnCancelTrans.module.scss'

const BtnCancelTrans = ({onClose}) => {

    return(
            <button className={styles.btn} onClick={onClose}>
                <p className={styles.btn__label}>cancel</p>
            </button>            
    )
}

export default BtnCancelTrans