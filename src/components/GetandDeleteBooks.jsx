import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'react-bootstrap';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './GetandDeleteBooks.css'

const GetandDeleteBooks = () => {

    const dbGetEndPoint = "http://localhost:5000/book"

    const [books, setBooks] = useState([])

    //GET REQUEST
    useEffect(() => {
        const getBooks = async () => {
            await axios.get(dbGetEndPoint)
                .then((response) => {
                    setBooks(response.data)
                })
                .catch((error) => {
                    console.log(error)
                })
            console.log("Getting from ::::", books)
        };

        getBooks();
    })

    // DELETE REQUEST
    const deleteBook = async (id) => {
        await axios.delete(`http://localhost:5000/book/deleteBook/${id}`)
            .then((response) => {
                console.log(response);
                const data = books.filter((value, i) => {
                    return value.id !== id
                })
                setBooks(data)
            })
    }

    // BOOK CARDS
    return (
        <Container>

            <h2 className="header">Collection of Current Books</h2>
            <h3 className="sub-header">There are {books.length} book(s) in the database</h3>

            <Grid container spacing={3} className="book-list">
                {books.map((book, index) => {
                    return (
                        <Grid
                            item
                            xs={12}
                            md={6}
                            lg={4}
                            className="books"
                            key={book._id}
                        >
                            <Card>
                                <CardMedia
                                    component="img"
                                    image={book.image}
                                    className="card-image-container"
                                >
                                </CardMedia>
                                <CardContent>
                                    <Typography>
                                        Title: {book.title}
                                    </Typography>
                                    <Typography>
                                        Author: {book.author}
                                    </Typography>
                                    <Typography>
                                        ID: {book._id}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant="contained" color="error" className="delete-book-button" type="button" onClick={() => deleteBook(book._id)}>Delete Book</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>

        </Container>
    )

}

export default GetandDeleteBooks