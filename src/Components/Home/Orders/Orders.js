import React, { useEffect, useState, useContext} from 'react';
import { UserContext } from '../../../App';



const Orders = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const [allOrders, setAlOrders] = useState([])
    

    useEffect(() => {
        fetch(`http://localhost:4000/allOrder`)
          .then(res => res.json())
          .then(data => setAlOrders(data))
      }, [loggedInUser.email])


    return (
        <div>
            <h3>You have: {allOrders.length} Orders</h3>
            <div>
                <table class="table table-hover">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>           
        </div>
    );
};

export default Orders;