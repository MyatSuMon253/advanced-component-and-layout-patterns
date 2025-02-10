import React from 'react'

const BookInfo = ({book}) => {
  const { name, price, author, pages } = book;

  return (
    <>
      <h2>{name}</h2>
      <p>Price: {price}</p>
      <p>Author: {author}</p>
      <p># of Pages: {pages}</p>
    </>
  );
}

export default BookInfo