import React from "react";

const NumberedList = ({ items, sourceName, ItemComponent }) => {
  return (
    <>
      {items.map((item, i) => (
        <div key={i}>
          <h3>{i + 1}</h3>
          <ItemComponent {...{ [sourceName]: item }} />
        </div>
      ))}
    </>
  );
};

export default NumberedList;
