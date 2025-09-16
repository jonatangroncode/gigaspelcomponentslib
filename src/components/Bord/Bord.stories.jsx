import Bord from "./Bord.jsx";

export default {
  title: "Components/Bord",
  component: Bord,
  parameters: { layout: "centered" },
};

export const Default = {
  args: { size: 10, coloredCells: [] },
};

export const OneRedAt_2x3 = {
  args: {
    size: 10,
    coloredCells: [{ row: 2, col: 3, color: "red" }],
  },
};

export const TwoColors = {
  args: {
    size: 10,
    coloredCells: [
      { row: 0, col: 0, color: "red" },
      { row: 6, col: 6, color: "yellow" },
    ],
  },
};
