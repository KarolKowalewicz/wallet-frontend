import React from "react";
import { VictoryPie, VictoryLabel } from "victory";
import styles from "./Diagram.module.scss";
import Loader from "../Lodaer/Loader";
import { colors } from "../../utils/chart/chartColors";

const labelStyle = {
  display: "none",
};

const Diagram = ({ data, isLoading }) => {
  const dataDiagram = data?.transactions?.data.map((item) => {
    return { x: item.category, y: item.amount };
  });

  if (isLoading) return <Loader />;

  return (
    <div className={styles.diagram}>
      <svg width={300} height={300}>
        <circle cx={140} cy={140} r={120} fill="white" />
        <VictoryPie
          labelComponent={<VictoryLabel style={labelStyle} />}
          standalone={false}
          width={300}
          height={300}
          innerRadius={140}
          labelRadius={10}
          data={dataDiagram}
          colorScale={colors}
        />

        <text
          className={styles.diagram__text}
          x={150}
          y={150}
          textAnchor="middle"
          dominantBaseline="middle"
        >
          &euro; {data?.statistics.balance}
        </text>
      </svg>
    </div>
  );
};

export default Diagram;
