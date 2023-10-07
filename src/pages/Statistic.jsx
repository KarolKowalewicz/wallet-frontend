import React from "react";
import { Fragment } from "react";
import StatisticForm from "../components/StatisticForm/StatisticForm";
import NavBar from "./../components/NavBar/NavBar";
import Header from "./../components/Header/Header";

const Statistic = () => {
  return (
    <Fragment>
      <Header />
      <NavBar />
      <StatisticForm />
    </Fragment>
  );
};

export default Statistic;