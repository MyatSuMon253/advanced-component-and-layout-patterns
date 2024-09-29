import React from "react";

const UserInfo = ({user}) => {
  const { name, age, country, books } = user || {};

  return user ? (
    <div>
      <h3>{name}</h3>
      <p>{age}</p>
      <p>{country}</p>
      <ul>
        {books.map((book) => (
          <li key={book}>{book}</li>
        ))}
      </ul>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default UserInfo;
