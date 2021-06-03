import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

const MangeBooks = () => {
    const [books, setBooks] = useContext(UserContext);
    console.log("books list", books);

     //to delete from the database
  const handleDelete = (id) => {
    fetch(`https://localhost/delete/${id}`, {
      method: "DELETE",
    })
    const WithoutDeletedBooks = books.filter(book => book._id !== id)
    setBooks(WithoutDeletedBooks)
  }
    return (
        <div className="mt-5">
            <div className="manage-table mt-5">
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                        <th scope="col">BOOK NAME</th>
                        <th scope="col">AUTHOR NAME</th>
                        <th scope="col">PRICE</th>
                        <th scope="col">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
              books.map(book => {
                const { bookName, authorName, price, _id } = book;
                return (
                  <tr key={_id}>
                    <td>{bookName}</td>
                    <td>{authorName}</td>
                    <td>${price}</td>
                    <td>
                      <button  to={`/admin/edit-books/${_id}`} variant="outline-info">
                        {/* <FontAwesomeIcon icon={faEdit} size="1x" /> */}
                      </button>
                      <button onClick={() => handleDelete(_id)} variant="outline-danger" className="ml-3">
                        {/* <FontAwesomeIcon icon={faTrash} size="1x" /> */}
                      </button>
                    </td>
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

export default MangeBooks;