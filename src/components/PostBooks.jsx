import React, { useState } from 'react'
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Form } from 'react-bootstrap'

const PostBooks = () => {

    const dbPostEndPoint = "http://localhost:5000/book/createBook"

    const [image, setImage] = useState("")
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")

    const postBook = async (event) => {
        try {
            await axios.post(dbPostEndPoint, {
                image, title, author
            })
        }
        catch (error) {
            console.log(error)
        }
    }

    return (

        <Form className="post-book-form" onSubmit={postBook}>

            <h2>Post New Book</h2>

            <Form.Group>
                <Form.Label>Book Image URL</Form.Label>
                <Form.Control type="text" name="image" value={image} onChange={(event) => setImage(event.target.value)} required />
            </Form.Group>

            <Form.Group>
                <Form.Label>Book Title</Form.Label>
                <Form.Control type="text" name="title" value={title} onChange={(event) => setTitle(event.target.value)} required />
            </Form.Group>

            <Form.Group>
                <Form.Label>Book Author</Form.Label>
                <Form.Control type="text" name="author" value={author} onChange={(event) => setAuthor(event.target.value)} required />
            </Form.Group>

            <Button className="add-button" type="submit">Add Book to List</Button>

        </Form>

    );
}

export default PostBooks