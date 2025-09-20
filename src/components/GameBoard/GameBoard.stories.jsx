import GameBoard from "./GameBoard.organism";

export default {
  title: "Components/GameBoard",
  component: GameBoard,
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: {
    size: 7,
  },
};

export const oneredcoinboard = {
  args: {
    size: 7,
    coloredCells: [{ row: 6, col: 1, color: "red" }],
  },
};

export const oneyellowcoinboard = {
  args: {
    size: 7,
    coloredCells: [{ row: 6, col: 1, color: "yellow" }],
  },
};

export const boardwithcoins = {
  args: {
    size: 7,
    coloredCells: [
      { row: 6, col: 1, color: "red" },
      { row: 6, col: 6, color: "yellow" },
      { row: 5, col: 5, color: "yellow" },
      { row: 4, col: 4, color: "yellow" },
      { row: 5, col: 6, color: "red" },
    ],
  },
};
