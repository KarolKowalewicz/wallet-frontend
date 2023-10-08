import React from "react";
import { VictoryPie, VictoryLabel } from "victory";
import styles from "./Diagram.module.scss";

const data = [
  { x: "Dane 1", y: 30 },
  { x: "Dane 2", y: 25 },
  { x: "Dane 3", y: 15 },
  { x: "Dane 4", y: 20 },
  { x: "Dane 5", y: 10 },
  { x: "Dane 6", y: 5 },
  { x: "Dane 7", y: 5 },
];

const labelStyle = {
display: "none",
  };

const Diagram = () => (
  <div>
    <svg className={styles.diagram} width={400} height={400}>
      <circle cx={200} cy={200} r={100} fill="white" />
      <VictoryPie
      
        standalone={false}
        innerRadius={100}
        data={data}
        colorScale={[
          "red",
          "blue",
          "green",
          "orange",
          "yellow",
          "pink",
          "purple",
        ]}
        labelComponent={<VictoryLabel style={labelStyle} />}
      />
      <text
        x={200}
        y={200}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="30"
      >
        10000
      </text>
    </svg>
  </div>
);

export default Diagram;

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
