import React from "react";

function GridItem({ letter, variant }) {
  const gridItemClass = variant === "none" ? "cell" : `cell ${variant}`;
  return <span className={gridItemClass}>{letter}</span>;
}

export default GridItem;
