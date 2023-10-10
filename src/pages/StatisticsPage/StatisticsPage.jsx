import React from "react";
import Media from 'react-media';
import styles from './StatisticsPage.module.scss';
import Balance from "../../components/Balance/Balance"

import StatisticForm from "../../components/StatisticForm/StatisticForm";
import NavBar from "../../components/NavBar/NavBar";
import Exchange from '../../components/Exchange/Exchange';
import DiagramForm from '../../components/Diagram/Diagram';
import { useEffect } from 'react';

const StatisticsPage = () => {
  useEffect(() => {
    document.title = "Statistics";
}, []);
  return (
    <div className={styles.container}>
      <div className={styles.gridstat}>
      <div className={styles.gridstat__navbar}><NavBar /></div>  
      
      <Media query="(min-width: 768px)">
        { matches =>
          matches ? ( <div className={styles.gridstat__balance}>
          <Balance /></div>
        ) : null
        }
        </Media>

       <Media query="(min-width: 768px)">
        { matches =>
          matches ? ( <div className={styles.gridstat__exchange}>
          <Exchange /></div>
        ) : null
        }
        </Media>
        <div className={styles.gridstat__diagram}>
          <h3 className={styles.gridstat__diagramname}>Statistics</h3>
          <div className={styles.gridstat__forms}> 
          <DiagramForm />
          <StatisticForm />
          </div>        
        </div>
      </div>
    </div>
  );
};

export default StatisticsPage;