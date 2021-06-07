import React, { useContext, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const Checkout = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const [book, setBook] = useState({})
    const {id} = useParams();

    fetch(`https://still-savannah-11670.herokuapp.com/book/${id}`)
    .then(res => res.json())
    .then(data => setBook(data))
    
    const history = useHistory()

    // console.log("this is order",book);
    //order book
   const handleOrder = () => {

        fetch(`http://localhost:4000/addOrder`,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(book)
            })
            .then(res => res.json())
            history.push('/orders')
   }



    return (
        <div className="text-center">
            <div className="mt-5">
                <h1>Checkout Your Book</h1>
                <h2>Hello, {loggedInUser.name}! Your Book Is Here.</h2>
            </div>
            <div className="table-div table-responsive">
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
                            <td>{loggedInUser.name}</td>
                            
                            <td>{book.bookName}</td>
                            <td>{book.authorName}</td>
                            <td>${book.price}</td>
                            <td className="btn btn-primary text-dark" onClick={handleOrder}><FontAwesomeIcon icon={faCheck} /> Confirm Order</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Checkout;