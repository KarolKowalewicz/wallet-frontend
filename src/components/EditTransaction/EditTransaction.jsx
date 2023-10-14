// import { useState } from 'react';
import styles from "./EditTransaction.module.scss";
import { ReactComponent as BtnClose } from "./../../img/btn_close.svg";
import Header from "../Header/Header";
import BtnCancelTrans from "../BtnCancelTrans/BtnCancelTrans";
import FormEditIncome from "../FormEditIncome/FormEditIncome";
import FormEditExpense from "../FormEditExpense/FormEditExpense";

const EditTransaction = ({ onClose, income, transactionId }) => {
  
  const isIncome = income;

  return (
    // backdrop
    <div className={styles.overlay}>
      {/* modal content */}
      <div className={`${styles.content} ${isIncome ? styles.incomeSizeContent : ""}`}>
        
        <div className={styles.headerIsHidden}>
          <Header />
        </div>

        {/* close btn */}
        <div className={styles.btnCloseWrap}>
          <button className={styles.btnCloseFunc} onClick={onClose}>
            <BtnClose />
          </button>
        </div>

        {/* transaction head */}
        <div className={styles.headerWrap}>
          <p className={styles.headerWrap__title}>Edit transaction</p>
        </div>

        {income ? (
          <FormEditIncome transactionId={transactionId} onClose={onClose}/>
        ) : (
          <FormEditExpense transactionId={transactionId} onClose={onClose} />
        )}

        <div className={styles.btnCancelTransWrap}>
          <BtnCancelTrans onClose={onClose} />
        </div>
      </div>
    </div>
  );
};

export default EditTransaction;
