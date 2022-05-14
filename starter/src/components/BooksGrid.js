import React from 'react';
import BookCard from './BookCard';
import PropTypes from 'prop-types'
const BooksGrid = ({bookList,BooksShelf,updateBookState}) => {
    return (
        <ol className="books-grid">
            {
                bookList.map(book=><BookCard key={book.id} title={book.title}
                    bookCategory={book.shelf}
                    authors={book.authors} 
                    image={book.imageLinks?book.imageLinks.thumbnail:"https://i.ibb.co/hFNvGxm/timthumb.png"}
                    BooksShelf={BooksShelf}
                    updateBookState={updateBookState}
                    book={book}
                    />)
            }
        </ol>
    );
};
BooksGrid.propTypes ={
    bookList: PropTypes.array.isRequired,
    BooksShelf: PropTypes.string.isRequired
}
export default BooksGrid;