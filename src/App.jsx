import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import PostBooks from "./components/PostBooks";
import GetandDeleteBooks from "./components/GetandDeleteBooks";
import UpdateBooks from "./components/UpdateBooks";

function App() {

  return (
    <div className="main-container">
      <h1>Book Tracker</h1>
      <br></br>

      <div className="post-and-update-books">
        <PostBooks />

        <UpdateBooks />
      </div>

      <GetandDeleteBooks />
    </div>
  )
}

export default App;

