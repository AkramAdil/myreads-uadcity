import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

import BooksShelf from './BooksShelf';
import { getAll, update } from "../BooksAPI";

const BookListPage = () => {
  const [allBooks,setAllBooks] = useState([])
    const [currentlyBooks,setCurrentlyBooks] = useState([])
    const [wantToReadBooks, setWantToRead] = useState([])
    const [readBooks,setRead] = useState([])
    
    const updateBookState = async(book,shelf) =>{
      await update(book,shelf)
      book.shelf= shelf
      const updatedBooks = allBooks.filter(b=>b.id!==book.id).concat([book])
      setAllBooks(updatedBooks)
    }
    useEffect(()=>{
      const getBooks = async ()=>{
        const getAllBooks = await getAll()
        setAllBooks(getAllBooks)
      }
      getBooks()
    },[])
    useEffect(()=>{
      const currentlyList = allBooks.filter(x=>x.shelf==='currentlyReading')
      setCurrentlyBooks(currentlyList)
      const wantList = allBooks.filter(x=>x.shelf==='wantToRead')
      setWantToRead(wantList)
      const readList = allBooks.filter(x=>x.shelf==='read')
      setRead(readList)
    },[allBooks])
    

    return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <BooksShelf shelfName={"Currently Reading"} 
              bookList={currentlyBooks}
              BooksShelf={"currentlyReading"}
              updateBookState={updateBookState}/>
              <BooksShelf shelfName={"Want To Read"}
              bookList={wantToReadBooks}
              BooksShelf={"wantToRead"}
              updateBookState={updateBookState}/>
              <BooksShelf shelfName={"Read"} bookList={readBooks} BooksShelf={"read"}
              updateBookState={updateBookState}/>
            </div>
          </div>
          <div className="open-search">
            <Link to='/search'>Add a book</Link>
          </div>
        </div>
    );
};

export default BookListPage;