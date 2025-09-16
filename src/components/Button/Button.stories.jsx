import React from "react";
import Button from "./index.js"; // hämtar din komponent via index.js

export default {
  title: "Components/Button", // hur det visas i Storybook-menyn
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: { control: "text" },
    onClick: { action: "clicked" }, // loggar klick i Actions-panelen
  },
};
export const SimpleClick = {
  args: {
    label: "Click me",
    onClick: () => console.log("clicked"), // bara skriver "clicked" i konsolen
  },
};

// Olika “states” (varianter) av Button
export const Default = {
  args: {
    label: "hejj",
  },
};

export const WithCustomLabel = {
  args: {
    label: "Press Here",
  },
};

export const Disabled = {
  args: {
    label: "Can’t click me",
    onClick: undefined, // tar bort klick
  },
};
