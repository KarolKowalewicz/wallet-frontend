import styles from './ModalAddTrans.module.scss'

const ModalAddTrans = ({onClose}) => {

    return(
        <div className={styles.overlay}>
            <div className={styles.content}>
                <div className={styles.divBtn}>
                    <button className={styles.btn} onClick={onClose}>x</button>
                </div>
                <p>AddTransaction</p>

            </div>
            
        </div>
    )
}

export default ModalAddTrans