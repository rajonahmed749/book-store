import React from 'react';
import { useHistory } from 'react-router-dom';
import './Books.css'

const Books = ({book}) => {

    const history = useHistory()
    const handleOrder = (id) =>{
          history.push(`/checkout/${id}`);
    }
    return (
        <div className="col-md-3">
            <div className="book">
                <img style={{height: '300px', width:"300px"}} src={book.imageURL} alt="books"/>
                <h3>Author Name : {book.authorName}</h3> 
                <h4>Price : {book.price}</h4> 
                <button onClick={()=>handleOrder(book._id)}>Buy Now</button>  
            </div>
        </div>
    );
};

export default Books;