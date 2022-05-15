import React, { useState } from 'react';
import PropTypes from 'prop-types'
const BookCard = ({title,authors,image,bookCategory,updateBookState,book}) => {
    const shelves = [
        {id:'1', shelfName:'CurrentReading', shelfDisplayName:'Currently Reading'},
        {id:'2', shelfName:'wantToRead', shelfDisplayName:'Want to Read'},
        {id:'3', shelfName:'read', shelfDisplayName:'Read'},
        {id:'4', shelfName:'none', shelfDisplayName:'None'}
    ]
    const [value,setValue] = useState(null)
    const changeValue = (e) =>{
        setValue(e.target.value)
        updateBookState(book,e.target.value)
    }

    return (
        <li>
            <div className="book">
            <div className="book-top">
                <div
                className="book-cover"
                style={{
                    width: 128,
                    height: 193,
                    backgroundImage:
                    `url(${image})`,
                    backgroundRepeat:"no-repeat",
                    backgroundSize: "100% 100%"
                }}
                ></div>
                <div className="book-shelf-changer">
                <select value ={value?value:bookCategory} onChange={changeValue}>
                    <option disabled>
                    Move to...
                    </option>
                    {shelves.map(shelf=><option key={shelf.id}value={shelf.shelfName}>{shelf.shelfDisplayName}</option>)}
                </select>
                </div>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{authors&&authors.join(", ")}</div>
            </div>
        </li>
    );
};

BookCard.propTypes = {
    title: PropTypes.string,
    authors: PropTypes.array,
    image: PropTypes.string,
    bookCategory: PropTypes.string,
    updateBookState: PropTypes.func,
    book: PropTypes.object
}
export default BookCard;