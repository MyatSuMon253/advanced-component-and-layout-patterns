import axios from "axios";
import React, { useCallback } from "react";
import { useDataSource } from "../custom_hooks/data-source.hook";

const fetchFromServer = (resourceUrl) => async () => {
  const response = await axios.get(resourceUrl);
  return response.data;
};

const getDataFromLocalStorage = (key) => () => {
  return localStorage.getItem(key);
};

const UserInfo = ({ userId }) => {
  const fetchUser = useCallback(
    () => fetchFromServer(`http://localhost:9090/users/${userId}`),
    [userId]
  );
  const user = useDataSource(fetchUser);
  const message = useDataSource(getDataFromLocalStorage("msg"));
  const { name, age, country, books } = user || {};

  console.log("rendering user info component");

  return user ? (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Country: {country}</p>
      <h2>Books</h2>
      <ul>
        {books?.map((book) => (
          <li key={book}>{book}</li>
        ))}
      </ul>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default UserInfo;
