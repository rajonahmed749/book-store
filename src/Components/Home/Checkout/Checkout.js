import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const [book, setBook] = useState({})
    const {id} = useParams();

    fetch(`http://localhost:4000/book/${id}`)
    .then(res => res.json())
    .then(data => setBook(data))
    
    // console.log(book);

    // console.log("this is checkout book",book);
    return (
        <div>
        <h1>Checkout Your Book</h1>
        {/* <h2>Hello, {loggedInUser.name}! Your Book Is Here.</h2> */}
        <h2>Hello, MR. X! Your Book Is Here.</h2>
        <div className="table-div">
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Buyer</th>
                    <th scope="col">Book Name</th>
                    <th scope="col">Author Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    {/* <td>{loggedInUser.name}</td> */}
                    <td>MR. x</td>
                    <td>{book.bookName}</td>
                    <td>{book.authorName}</td>
                    <td>{book.price}</td>
                    <td>{book.price}</td>
                    {/* <td className="btn btn-primary" onClick={handleOrder}>Confirm Order</td> */}
                </tr>
            </tbody>
        </table>
        </div>
    </div>
    );
};

export default Checkout;