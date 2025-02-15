import React from "react";
import { useResource } from "./resource.hook";

export const BookInfo = ({ bookId }) => {
  const book = useResource(`/http://localhost:9090/books/${bookId}`);
  const { name, price, author, pages } = book || {};

  return (
    <>
      <h2>{name}</h2>
      <p>Price: {price}</p>
      <p>Author: {author}</p>
      <p># of Pages: {pages}</p>
    </>
  );
};
