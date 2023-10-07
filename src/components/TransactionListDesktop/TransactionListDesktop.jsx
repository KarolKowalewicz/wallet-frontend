import { ReactComponent as Pencil } from './../../img/pencil.svg';
import styles from './TransactionListDesktop.module.scss';


const TransactionListDesktop = () => {

    return (
        <div className={styles.container}>
       <table className={styles.transtable}> 
        <thead  className={styles.transtable__head}>
          <tr className={styles.transtable__headtable}>
            <th className={styles.transtable__headcell}>Date</th>
            <th className={styles.transtable__headcell__type}>Type</th>
            <th className={styles.transtable__headcell}>Category</th>
            <th className={styles.transtable__headcell}>Comment</th>
            <th className={styles.transtable__headcell__sum}>Sum</th>
            <th className={styles.transtable__headcell}></th>         
          </tr>
        </thead>
        <tbody>
        {/*transactions.map((transaction) => */}
            <tr className={styles.transtable__row}>
              <td className={styles.transtable__rowcell}>date</td>
              <td className={styles.transtable__rowcell}>transaction.type</td>
              <td className={styles.transtable__rowcell}>transaction.category</td>
              <td className={styles.transtable__rowcell}>transaction.comment</td>
              <td className={styles.transtable__rowcell}>transaction.sum</td>
              <td className={styles.transtable__rowcell}>
                <button className={styles.btn__edit}>
                <Pencil className={styles.btn__edit__icon} />
                </button>
                <button className={styles.btn__delete}>Delete</button>
              </td>             
            </tr>
            <tr className={styles.transtable__row}>
              <td className={styles.transtable__rowcell}>date</td>
              <td className={styles.transtable__rowcell}>transaction.type</td>
              <td className={styles.transtable__rowcell}>transaction.category</td>
              <td className={styles.transtable__rowcell}>transaction.comment</td>
              <td className={styles.transtable__rowcell}>transaction.sum</td>
              <td className={styles.transtable__rowcell}>
                <button className={styles.btn__edit}>
                <Pencil className={styles.btn__edit__icon} />
                </button>
                <button className={styles.btn__delete}>Delete</button>
              </td>             
            </tr>
            <tr className={styles.transtable__row}>
              <td className={styles.transtable__rowcell}>date</td>
              <td className={styles.transtable__rowcell}>transaction.type</td>
              <td className={styles.transtable__rowcell}>transaction.category</td>
              <td className={styles.transtable__rowcell}>transaction.comment</td>
              <td className={styles.transtable__rowcell}>transaction.sum</td>
              <td className={styles.transtable__rowcell}>
                <button className={styles.btn__edit}>
                <Pencil className={styles.btn__edit__icon} />
                </button>
                <button className={styles.btn__delete}>Delete</button>
              </td>             
            </tr>
          
        </tbody>                 
       
       </table>
       </div>
    )
}

export default TransactionListDesktop