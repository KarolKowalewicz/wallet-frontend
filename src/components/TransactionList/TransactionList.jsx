import { ReactComponent as Pencil } from './../../img/pencil.svg';
import styles from './TransactionList.module.scss';

import { useState } from 'react'
import EditTransaction from '../EditTransaction/EditTransaction';


const TransactionList = () => {

    const [showEdittrans, setShowEditTrans] = useState(false);

    const openModal = () => {
        setShowEditTrans(true);
    };

    const closeModal = () => {
        setShowEditTrans(false);
    };

    return (
       <div>
            {/*transactions.map((transaction) => */}       
            <ul className={styles.transaction}>
                <li className={styles.transaction__item}> 
                    <h4 className={styles.transaction__header}>Date</h4> 
                    <p className={styles.transaction__data}>transaction.date</p></li>
                <li className={styles.transaction__item}> 
                    <h4 className={styles.transaction__header}>Type</h4> 
                    <p className={styles.transaction__data}>'+' : '-'</p></li>
                <li className={styles.transaction__item}> 
                    <h4 className={styles.transaction__header}>Category</h4> 
                    <p className={styles.transaction__data}>transaction.category</p></li>
                <li className={styles.transaction__item}> 
                    <h4 className={styles.transaction__header}>Comment</h4> 
                    <p className={styles.transaction__data}>transaction.comment</p></li>
                <li className={styles.transaction__item}> 
                    <h4 className={styles.transaction__header}>Sum</h4> 
                    <p className={styles.transaction__data}>transaction.sum</p></li>
                <li className={styles.transaction__item__last}>
                    <button className={styles.btn__delete}>Delete</button>
                    <button className={styles.btn__edit} onClick={openModal}>
                    <Pencil className={styles.btn__edit__icon} />Edit</button>
                </li>
            </ul>     
                  
            {showEdittrans && <EditTransaction onClose={closeModal} />}
            
       </div>
    )
}

export default TransactionList