import React, { useEffect, useState } from 'react';

import styles from './Exchange.module.scss'
import Axios from 'axios';

const Exchange = () => {


    const [exchangeRates, setExchangeRates] = useState({});
    const apiUrl = 'https://api.exchangerate-api.com/v4/latest/EUR'; // ECB API URL


    useEffect(() => {
        const fetchData = () => {
          Axios.get(apiUrl)
            .then((response) => {
              if (response.status === 200) {
                setExchangeRates(response.data.rates);
                console.log(response.data)
              } else {
                console.error('Błąd pobierania danych:', response.statusText);
              }
            })
            .catch((error) => console.error('Błąd pobierania danych:', error));
        };
      
        fetchData();
      
        // Refresch interwal - 5 min
        const intervalId = setInterval(fetchData, 5 * 60 * 1000);
      
        return () => clearInterval(intervalId);
      }, []);

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
                {exchangeRates && Object.entries(exchangeRates).map(([currency, rate]) => (
                <ul key={currency} className={styles.table__values__ul}>
                    <li className={styles.table__values__ul__li}>{currency}</li>
                    <li className={styles.table__values__ul__li}>{rate ? rate.toFixed(2) : ''}</li>
                    <li className={styles.table__values__ul__li}>{rate ? (rate * 1.01).toFixed(2) : ''}</li>
                </ul>
            ))}
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
        </div>
    )

}
export default Exchange
