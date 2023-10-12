import React from "react";
import { VictoryPie, VictoryLabel } from "victory";
import styles from "./Diagram.module.scss";

const labelStyle = {
  display: "none",
};

const DiagramForm = ({ data, isLoading }) => {
  const dataDiagram = data?.transactions?.data.map((item) => {
    return { x: item.category, y: item.amount };
  });

  //TODO: add some spinner
  if (isLoading) return <h2>Loading...</h2>;

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
          colorScale={[
            "red",
            "blue",
            "green",
            "orange",
            "yellow",
            "pink",
            "purple",
          ]}
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

export default DiagramForm;

// import React from "react";
// import styles from "./Diagram.module.scss";

// const Diagram = () => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.diagram}>
//         <div className={styles.diagram__diagram}>
//           <div className={styles.diagram__cat}></div>
//           <div className={styles.diagram__cat}></div>
//           <div className={styles.diagram__cat}></div>
//           <div className={styles.diagram__cat}></div>
//           <div className={styles.diagram__cat}></div>
//           <div className={styles.diagram__cat}></div>
//           <div className={styles.diagram__cat}></div>
//           <div className={styles.diagram__cat}></div>
//           <div className={styles.diagram__cat}></div>
//           <div className={styles.diagram__cat}></div>
//         </div>
//       </div>
//     </div>
//   );
// };
