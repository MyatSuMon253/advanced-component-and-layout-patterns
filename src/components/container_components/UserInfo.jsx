import React from "react";

const UserInfo = ({user}) => {
  const { name, age, country, books } = user;

  return (
    <>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Country: {country}</p>
      <h2>Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book}> {book} </li>
        ))}
      </ul>
    </>
  );
};

export default UserInfo;
