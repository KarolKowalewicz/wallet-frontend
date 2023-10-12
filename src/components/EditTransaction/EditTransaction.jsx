// import { useState } from 'react';
import styles from "./EditTransaction.module.scss";
import { ReactComponent as BtnClose } from "./../../img/btn_close.svg";
import Header from "../Header/Header";
import BtnCancelTrans from "../BtnCancelTrans/BtnCancelTrans";
import FormEditIncome from "../FormEditIncome/FormEditIncome";
import FormEditExpense from "../FormEditExpense/FormEditExpense";

const EditTransaction = ({ onClose, income, transactionId }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.content}>
        <Header />

        <div className={styles.btnCloseWrap}>
          <button className={styles.btnCloseFunc} onClick={onClose}>
            <BtnClose className={styles.btnCloseFunc__vector} />
          </button>
        </div>

        <div className={styles.headerWrap}>
          <p className={styles.headerWrap__title}>Edit transaction</p>
        </div>

        {income ? (
          <FormEditIncome transactionId={transactionId} />
        ) : (
          <FormEditExpense transactionId={transactionId} />
        )}

        <div className={styles.actBtnsWrap}>
          <BtnCancelTrans className={styles.btnCancelTrans} onClose={onClose} />
        </div>
      </div>
    </div>
  );
};

export default EditTransaction;
