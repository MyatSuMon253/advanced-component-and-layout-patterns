import React from "react";

const SmallBookListItem = ({ book }) => {
  const { name, price } = book;

  return (
    <h2>
      {name} / {price}
    </h2>
  );
};

export default SmallBookListItem;
