import React, { useEffect, useState, useContext} from 'react';
import { UserContext } from '../../../App';



const Orders = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    let [allOrders, setAlOrders] = useState([])
        if(!loggedInUser.name){
            allOrders=[]
        }
    console.log(allOrders);
    useEffect(() => {
        fetch(`https://still-savannah-11670.herokuapp.com/allOrder`)
          .then(res => res.json())
          .then(data => setAlOrders(data))
      }, [loggedInUser.email])


    return (
        <div className="text-center mt-4">
            <div className="text-center mt-4">
                <h3 className="textColor">Dear {loggedInUser.name}</h3>
                <h3>You've purchased {allOrders.length} book(s)</h3>
            </div>
            <div className=" mt-4">
                <table class="table table-hover">    
                    <thead>
                        <tr>
                        <th scope="col"></th>
                        <th scope="col">Book Name</th>
                        <th scope="col">Author Name</th>
                        <th scope="col">Price</th>
                        </tr>
                    </thead>                
                    <tbody>
                    {
                         allOrders?.map(info => {
                        return (
                        <tr key={info._id}>
                            <td> <img src={info.imageURL} alt="books" style={{ width: "50px" }} /> </td>
                            <td>{info.bookName}</td>
                            <td>{info.authorName}</td>
                            <td>${info.price}</td>
                        </tr>
                        )
                        })
                    }
                    </tbody>
                </table>
            </div>           
        </div>
    );
};

export default Orders;