
import Media from 'react-media';

import Balance from "../../components/Balance/Balance"
import ButtonAdd from "../../components/ButtonAdd/ButtonAdd"
import styles from './HomePage.module.scss';
import NavBar from "./../../components/NavBar/NavBar";
import TransactionList from './../../components/TransactionList/TransactionList';
import TransactionListDesktop from './../../components/TransactionListDesktop/TransactionListDesktop';
import Exchange from './../../components/Exchange/Exchange';
import { useEffect } from 'react';



// import Balance from "../../components/Balance/Balance";
// import ButtonAdd from "../../components/ButtonAdd/ButtonAdd";
// import Exchange from "../../components/Exchange/Exchange";
// import NavBar from "../../components/NavBar/NavBar";
// import styles from './HomePage.module.scss';



const HomePage = () => {
  useEffect(() => {
    document.title = "Welcome to Wallet App";
}, []);

    return ( <>
      <div className={styles.container}>
        
        <div className={styles.navbar}>
        <NavBar />
        </div>
               
        <Media query="(min-width: 768px)">
        { matches =>
          matches ? ( <div className={styles.exchange}>
          <Exchange /></div>
        ) : null
        }
        </Media>
        
        <div className={styles.balance}><Balance /></div>

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
          matches ? ( <div className={styles.transactions}>
          <TransactionListDesktop  /> </div>
        ) : null
        }</Media>
               
        </div>
        <ButtonAdd className={styles.btnAdd} />
        
        </>
    
       
        


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

