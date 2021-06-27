import React from 'react';
import { useHistory } from 'react-router-dom';
import './Books.css'

const Books = ({ book }) => {
    const history = useHistory()
    const handleOrder = (id) => {
        history.push(`/checkout/${id}`);
    }

    return (
        <div className="col-md-3">
            <div className="book shadow">
                <img className="booksIMG" style={{ height: '300px', width: "300px" }} src={book.imageURL} alt="books" />
                <h4>Author: {book.authorName}</h4>
                <h5>Price: ${book.price}</h5>
                <button onClick={() => handleOrder(book._id)}>Buy Now</button>
            </div>
        </div>
    );
};

export default Books;