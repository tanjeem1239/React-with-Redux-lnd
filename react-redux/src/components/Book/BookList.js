import React from 'react'
import BookShow from './BookShow'

const BookList = ({ books, onEdit}) => {
    const renderBooks = books.map((book) => {
        <BookShow key={book.id} book={book} onEdit={onEdit}/>

    });

  return (
    <div>{renderBooks}</div>
  )
}

export default BookList