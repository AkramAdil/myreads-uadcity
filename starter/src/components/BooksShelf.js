import React from 'react';
import BooksGrid from './BooksGrid';
const BooksShelf = ({shelfName,bookList,BooksShelf,updateBookState}) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfName}</h2>
            <div className="bookshelf-books">
                <BooksGrid bookList={bookList} BooksShelf={BooksShelf} updateBookState={updateBookState}/>
            </div>
        </div>
    );
};

export default BooksShelf;