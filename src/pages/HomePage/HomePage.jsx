
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


    return ( <div className={styles.container}>
      <div className={styles.grid}>
        
        <div className={styles.grid__navbar}>
        <NavBar />
        </div>               
              
        <div className={styles.grid__balance}><Balance /></div>

        <Media query="(min-width: 768px)">
        { matches =>
          matches ? ( <div className={styles.grid__exchange}>
          <Exchange /></div>
        ) : null
        }
        </Media>

        <Media query="(max-width: 767px)">
        { matches =>
          matches ? (
        <TransactionList />) : null
        }</Media>
        
        <Media query="(max-width: 767px)">
        { matches =>
          matches ? (
        <TransactionList />) : null
        }</Media>

        <Media query="(min-width: 768px)">
        { matches =>
          matches ? ( <div className={styles.grid__transactions}>
          <TransactionListDesktop  /> </div>
        ) : null
        }</Media>             
        </div>
        <div className={styles.btnAddFixed}><ButtonAdd /></div>
             
        </div>
    
       
        


//     return(
//         <div className={styles.container}>HomePage
//             <p>UserMenu-buttony-kafelki</p>
//             <NavBar />
//             <Balance />
//             <p>Tabela</p>
//             <Exchange />
//             <ButtonAdd className={styles.btnAdd}/>

//         </div>


    );

}

export default HomePage
