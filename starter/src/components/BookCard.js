import React, { useState } from 'react';

const BookCard = ({title,authors,image,bookCategory,updateBookState,book}) => {
    
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
                    <option value="none" disabled>
                    Move to...
                    </option>
                    <option value="currentlyReading">
                    Currently Reading
                    </option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
                </div>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{authors&&authors.join(", ")}</div>
            </div>
        </li>
    );
};

export default BookCard;