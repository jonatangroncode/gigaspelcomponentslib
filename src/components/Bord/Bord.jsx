import React from "react";
import styles from "./Bord.module.css";

const Bord = ({ size = 7, coloredCells = [] }) => {
  return (
    <div
      className={styles.bord}
      style={{
        gridTemplateColumns: `repeat(${size}, 40px)`,
        gridTemplateRows: `repeat(${size}, 40px)`,
      }}
    >
      {Array.from({ length: size }).map((_, row) =>
        Array.from({ length: size }).map((_, col) => {
          // hitta om denna cell finns i coloredCells
          const found = coloredCells.find(
            (c) => c.row === row && c.col === col
          );
          const color = found ? found.color : "white";

          return (
            <div key={`${row}-${col}`} className={styles.cell}>
              <div
                className={styles.cellContent}
                style={{ backgroundColor: color }}
              />
            </div>
          );
        })
      )}
    </div>
  );
};

export default Bord;
