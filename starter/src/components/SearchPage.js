import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { search,update,getAll } from "../BooksAPI";
import BookCard from "./BookCard";
const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [FoundBooks, setFoundBooks] = useState([])

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const updateBookState = async(book,shelf) =>{
    await update(book,shelf)
  }
  useEffect(()=>{
    const getBooks = async ()=>{
      if(searchTerm==="") {
        setFoundBooks([])
      }
      else {
        const searchedBooks = await search(searchTerm)
        const shelfedBooks = await getAll()
        const filterdBooks = shelfedBooks.filter(book=>book.title.includes(capitalizeFirstLetter(searchTerm))) //filter books come from getAll that match serchTerm
        const allBooks = filterdBooks.concat(searchedBooks).filter(x=>typeof x=="object"&&x.id)//combine books comes from search API and book come from getAll API
        const newBooks = allBooks.filter((book, index) =>//to filter duplicate books 
        index === allBooks.findIndex((t) => (
          t.id === book.id
        ))
      )
        setFoundBooks(newBooks)
      }
    }
    getBooks()
  },[searchTerm])
    return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">Close</Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {FoundBooks.length===0||FoundBooks.error?"No Books Found":
              (
                FoundBooks.map(book=><BookCard key={book.id} title={book.title}
                  bookCategory={book.shelf?book.shelf:"none"}
                  authors={book.authors}
                  image={book.imageLinks?book.imageLinks.thumbnail:"https://i.ibb.co/hFNvGxm/timthumb.png"}
                  updateBookState={updateBookState}
                  book={book}
                  />)
              )
            }              
            </ol>
          </div>
        </div>
    );
};

export default SearchPage;