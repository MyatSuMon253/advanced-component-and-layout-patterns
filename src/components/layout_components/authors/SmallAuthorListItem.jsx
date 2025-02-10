import React from "react";

const SmallAuthorListItem = ({ author }) => {
  const { name, age } = author;

  return (
    <p>
      Name: {name}, Age: {age}
    </p>
  );
};

export default SmallAuthorListItem;
