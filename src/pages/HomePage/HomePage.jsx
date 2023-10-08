
import Media from 'react-media';

import Balance from "../../components/Balance/Balance"
import ButtonAdd from "../../components/ButtonAdd/ButtonAdd"
import styles from './HomePage.module.scss';
import NavBar from "./../../components/NavBar/NavBar";
import TransactionList from './../../components/TransactionList/TransactionList';
import TransactionListDesktop from './../../components/TransactionListDesktop/TransactionListDesktop';
import Exchange from './../../components/Exchange/Exchange';
import { useEffect } from 'react';

const HomePage = () => {
  useEffect(() => {
    document.title = "Welcome to Wallet App";
}, []);

    return (
      <>
        <div className={styles.container}>
          <div className={styles.navbar}>
            <NavBar />
          </div>

          <Media query="(max-width: 767px)">
            {(matches) =>
              matches ? (
                <>
                  <div className={styles.balance}>
                    <Balance />
                  </div>
                  <TransactionList />
                </>
              ) : (
                <div className={styles.exchange}>
                  <Exchange />
                </div>
              )
            }
          </Media>

          <Media query="(min-width: 768px)">
            {(matches) =>
              matches ? (
                <>
                  <div className={styles.balance}>
                    <Balance />
                  </div>
                  <div className={styles.transactions}>
                    <TransactionListDesktop />
                  </div>
                </>
              ) : null
            }
          </Media>

          <Media query="(max-width: 767px)">
            {(matches) => (matches ? <TransactionList /> : null)}
          </Media>

          <Media query="(min-width: 768px)">
            {(matches) =>
              matches ? (
                <div className={styles.transactions}>
                  <TransactionListDesktop />{" "}
                </div>
              ) : null
            }
          </Media>
        </div>
        <ButtonAdd className={styles.btnAdd} />
      </>
    );

}

export default HomePage
