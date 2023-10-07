import React from "react";
import { Fragment } from "react";
import StatisticForm from "../components/StatisticForm/StatisticForm";
import NavBar from "./../components/NavBar/NavBar";

const Statistic = () => {
  return (
    <Fragment>
      <NavBar />
      <StatisticForm />
    </Fragment>
  );
};

export default Statistic;