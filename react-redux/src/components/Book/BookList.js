import React from 'react';
import BookShow from './BookShow';

const BookList = ({ books, onEdit, onDelete}) => {
    const renderBooks = books.map((book) => (
      <BookShow key={book.id} book={book} onEdit={onEdit} onDelete={onDelete}/>
    ));

    return <div className='book-list'>{renderBooks}</div>;
};

export default BookList;