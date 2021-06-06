import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const Checkout = () => {
    const [book, setBook] = useState({})
    const {id} = useParams();

    fetch(`https://still-savannah-11670.herokuapp.com/book/${id}`)
    .then(res => res.json())
    .then(data => setBook(data))
    
    const history = useHistory()
    //order book
   const handleOrder = () => {
       const order = [book]
       console.log("this book is orderd",order[0]);
        fetch(`http://localhost/addOrder`,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(order[0])
            })
            .then(res => res.json())
            history.push('/orders')
   }


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
                    <td className="btn btn-primary text-dark" onClick={handleOrder}>Confirm Order</td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
    );
};

export default Checkout;