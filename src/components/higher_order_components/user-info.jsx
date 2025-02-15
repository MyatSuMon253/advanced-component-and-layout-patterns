import axios from "axios";
import React from "react";
import { useDataSource } from "../custom_hooks/data-source.hook";

const fetchFromServer = (resourceUrl) => async () => {
  const response = await axios.get(resourceUrl);
  return response.data;
};

const getDataFromLocalStorage = (key) => () => {
  return localStorage.getItem(key);
};

const UserInfo = ({ userId }) => {
  // const user = useResource(`http://localhost:9090/users/${userId}`);
  const user = useDataSource(
    fetchFromServer(`http://localhost:9090/users/${userId}`)
  );
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
