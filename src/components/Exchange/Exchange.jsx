
import styles from './Exchange.module.scss'

const Exchange = () => {

    return(
        <div className={styles.table}>
            <div className={styles.table__title}>
                <ul className={styles.table__title__ul}>
                    <li className={styles.table__title__ul__li}>Currency</li>
                    <li className={styles.table__title__ul__li}>Purchase</li>
                    <li className={styles.table__title__ul__li}>Sale</li>
                </ul>
            </div>
            <div className={styles.table__values}>
                <ul className={styles.table__values__ul}>
                    <li className={styles.table__values__ul__li}>USD</li>
                    <li className={styles.table__values__ul__li}>27.55</li>
                    <li className={styles.table__values__ul__li}>27.65</li>
                </ul>
                <ul className={styles.table__values__ul}>
                    <li className={styles.table__values__ul__li}>EUR</li>
                    <li className={styles.table__values__ul__li}>30.00</li>
                    <li className={styles.table__values__ul__li}>30.10</li>
                </ul>
            </div>




            {/* <table className={styles.table}>
                <thead className={styles.table__thead}>
                    <tr>
                        <th>Currency</th>
                        <th>Purchase</th>
                        <th>Sale</th>
                    </tr>
                </thead>
                <tbody className={styles.table__tbody}>
                    <tr>
                        <td>USD</td>
                        <td>27.55</td>
                        <td>27.65</td>
                    </tr>
                    <tr>
                        <td>EUR</td>
                        <td>30.00</td>
                        <td>30.10</td>
                    </tr>
                    
                </tbody>
            </table> */}
        </div>
    )

}
export default Exchange