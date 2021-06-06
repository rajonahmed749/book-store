import React, { useState } from 'react';

const Orders = () => {
    const [orders, setOrders] = useState([])
    const url = `https://still-savannah-11670.herokuapp.com/allOrder`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        setOrders(data);
        // console.log('orders', data);
    })
    return (
        <div>
            <h3>You have: {orders.length} Orders</h3>
            <div className="table-container">
            <table className="order-table table">
            {
                orders.map(book =>
                // <thead key={book._id}>
                <thead>
                    <tr>
                        {/* <td>MR X</td>
                        <td>{book.name}</td>
                        <td>{book.autor}</td>
                        <td>{book.price}</td> */}
                        <td>MR X</td>
                        <td>X book</td>
                        <td>MR. Author</td>
                        <td>$77</td>
                    </tr>
                </thead>
                )
            }
            </table>
            </div>
        </div>
    );
};

export default Orders;