import React from "react"
import "./book.css"
function Book ()
{
    // Use a random book cover image from Open Library
    const imgSrc = `https://covers.openlibrary.org/b/id/${Math.floor(7000000 + Math.random()*2000000)}-L.jpg`;
    return (
        <>
            <img src={imgSrc} alt="Random Book Cover" style={{ width: 120, height: 180, objectFit: 'cover', borderRadius: 8 }} />
            <h1>Book Title</h1>
            <h2>250</h2>
        </>
    )
}
export default Book;