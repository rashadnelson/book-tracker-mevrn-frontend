import React, { useState, useEffect } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Form } from 'react-bootstrap'

const UpdateBooks = () => {
    const dbPutEndPoint = "http://localhost:5000/book/updateBook"

    const [id, setID] = useState("")
    const [image, setImage] = useState("")
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")

    const updateBook = async (id) => {
        try {
            await axios.put(`http://localhost:5000/book/updateBook/${id}`, {
                id, image, title, author
            })
        }
        catch (error) {
            console.log(error)
        }
    }

    return (

        <Form className="update-book-form" onSubmit={() => updateBook(id)}>

            <h2>Update Current Entry</h2>

            <Form.Group>
                <Form.Label>Existing Book ID</Form.Label>
                <Form.Control type="text" name="id" value={id} onChange={(event) => setID(event.target.value)} required />
            </Form.Group>

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

            <Button className="update-button" type="submit">Update Existing Book</Button>

        </Form>

    );
}

export default UpdateBooks