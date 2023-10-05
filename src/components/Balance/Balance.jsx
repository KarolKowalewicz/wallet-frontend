
import styles from './Balance.module.scss'

const Balance = () => {

    return(
        <div className={styles.balance}>
            <div className={styles.balance__layout}>
                <p className={styles.balance__description}>your balance</p>
                <h3 className={styles.balance__content}>&#8372; 24 000.00</h3>
            </div>
        </div>
    )
}

export default Balance