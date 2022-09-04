import React, { useState } from "react";
import "./style.css";
import Book from "./bookListApi.js";
import BookCard from "./BookCard.js";
import Navbar from "./Navbar.js";

const uniqueList = [
  ...new Set(
    Book.map((curElem) => {
      return curElem.language;
    })
  ),
  "All",
];

// console.log(uniqueList);

const Library = () => {
  const [bookData, setBookData] = useState(Book);
  const [bookList, setBookList] = useState(uniqueList);

  const filterItem = (language) => {
    if (language === "All") {
      setBookData(Book);
      return;
    }

    const updatedList = Book.filter((curElem) => {
      return curElem.language === language;
    });

    setBookData(updatedList);
  };

  return (
    <>
      <Navbar filterItem={filterItem} bookList={bookList} />
      <BookCard bookData={bookData} />
    </>
  );
};

export default Library;
