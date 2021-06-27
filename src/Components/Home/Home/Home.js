import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';
const Home = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch("https://still-savannah-11670.herokuapp.com/allBooks")
            .then(res => res.json())
            .then(data => {
                setBooks(data)
                if (data) {
                    document.getElementById('spinner').style.display = 'none'
                }
            })
    }, [])
    return (
        <div>
            <div className="text-center mt-5">
                <h3>Welcome to BOOK STORE</h3>
            </div>
            <div className="spinner-border text-info mt-4" id="spinner"></div>
            <div className="row">
                {
                    books.map(book => <Books key={book._id} book={book}></Books>)
                }
            </div>
        </div>
    )
}

export default Home;