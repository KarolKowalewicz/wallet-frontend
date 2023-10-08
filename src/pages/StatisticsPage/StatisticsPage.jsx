import React from "react";
import { Fragment } from "react";
import StatisticForm from "../../components/StatisticForm/StatisticForm";
import NavBar from "../../components/NavBar/NavBar";
import Header from "../../components/Header/Header";
import { useEffect } from 'react';

const StatisticsPage = () => {
  useEffect(() => {
    document.title = "Statistics";
}, []);
  return (
    <Fragment>
      <Header />
      <NavBar />
      <StatisticForm />
    </Fragment>
  );
};

export default StatisticsPage;