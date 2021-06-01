import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';
const Home = () =>{

    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/allBooks")
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])
    return (
        <div>
            <h3 className="text-center mt-5 text-danger">{books.length}</h3>
            <div className="spinner-border text-info text-center" id="spinner" ></div>
            <div className="row">
                {
                    books.map(book => <Books key={book._id} book={book}></Books> )
                }
            </div>

        </div>
    )
}

export default Home;