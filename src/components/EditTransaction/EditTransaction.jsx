// import { useState } from 'react';
import styles from './EditTransaction.module.scss';
import { ReactComponent as BtnClose } from './../../img/btn_close.svg';
import Header from '../Header/Header';
import BtnCancelTrans from '../BtnCancelTrans/BtnCancelTrans';
import FormEditIncome from '../FormEditIncome/FormEditIncome';
import FormEditExpense from '../FormEditExpense/FormEditExpense';

const EditTransaction = ({ onClose, income }) => {

    return (
        // backdrop
        <div className={styles.overlay}>
            {/* modal content */}
            <div className={styles.content}>

                <Header />
                
                {/* close btn */}
                <div className={styles.btnCloseWrap}>
                    <button className={styles.btnCloseFunc} onClick={onClose}>
                        <BtnClose className={styles.btnCloseFunc__vector} />
                    </button>
                </div>

                {/* transaction head */}
                <div className={styles.headerWrap}>
                    <p className={styles.headerWrap__title}>Edit transaction</p>
                </div>

                {/* container for slider */}
                {/* <div className={styles.typeOfTransHead}>
                    <p className={styles.incomeLabel}>income</p>
                    <p className={styles.slashLabel}>/</p>
                    <p className={styles.expenseLabel}>expense</p>
                </div> */}
                
                {/* logika do otwierania income lub expense w zależności od typu otwieranej trnasakcji  */}
                {income ? <FormEditIncome /> : <FormEditExpense />}
                {/* <FormEditExpense /> */}
                {/* <FormEditIncome /> */}

                <div className={styles.actBtnsWrap}>
                    <BtnCancelTrans className={styles.btnCancelTrans} onClose={onClose} />
                </div>
            </div>
        </div>
    );
}

export default EditTransaction;