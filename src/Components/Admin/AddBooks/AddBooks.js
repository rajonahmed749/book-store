import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import "./AddBooks.css";
const axios = require('axios');

const AddBooks = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();    
    const [imageURL, setImgURL] = useState ({});

    const [books, setBooks] = useContext(UserContext);

    const onSubmit = data =>{
        console.log("first data", data)
        const bookData = {
            bookName : data.bookName,
            authorName : data.authorName,
            price : data.price,
            imageURL : imageURL
        }
        setBooks(bookData)
        // const { bookName, authorName, price } = data;
        const url = `http://localhost:4000/addBook`;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookData),
            })            
            .then(res => {
            console.log('Server side response', res);
            alert("this Book addedd sucessfully");
            })
            .catch((error) => {
            console.error('Error:', error);
            });

         console.log(bookData)
        };

    const handleImage = e => {
        console.log(e.target.files)
        const imageData = new FormData();
        imageData.set("key", "c3d923525ccf4403d53c88c8a104059e")
        imageData.append("image", e.target.files[0]);
        axios.post("https://api.imgbb.com/1/upload", imageData)
        .then(function (response) {
            setImgURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    
      }

    return (
        <div>
            <div>
            <form onSubmit={handleSubmit(onSubmit)} className="form-card">    
                 <input type="text" name="bookName" placeholder="Enter Book Name" {...register("bookName", { required: true })} />
                
                <input type="text" name="authorName" placeholder="Enter Author Name" {...register("authorName", { required: true })} />

                <input type="number" name="price" placeholder="Enter Price" {...register("price", { required: true })} />

                <input onChange={handleImage} type="file" />
              
                               
                <input type="submit" />
            </form>
            </div>
        </div>
    );
};

export default AddBooks;