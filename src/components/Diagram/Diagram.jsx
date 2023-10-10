import React from "react";
import { VictoryPie, VictoryLabel } from "victory";
import styles from "./Diagram.module.scss";

const data = [
  { x: "Data 1", y: 8700 },
  { x: "Data 2", y: 3800 },
  { x: "Data 3", y: 1500 },
  { x: "Data 4", y: 800 },
  { x: "Data 5", y: 2208 },
  { x: "Data 6", y: 300 },
  { x: "Data 7", y: 3400 },
  { x: "Data 8", y: 1230 },
  { x: "Data 9", y: 610 },
];

const labelStyle = {
  display: "none",
};

const DiagramForm = () => (
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
      />

      <text
        className={styles.diagram__text}
        x={150}
        y={150}
        textAnchor="middle"
        dominantBaseline="middle"
      >
        &euro; 24 000.00
      </text>
    </svg>
  </div>
);

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
