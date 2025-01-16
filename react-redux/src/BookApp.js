
import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import BookCreate from './components/Book/BookCreate';
import BookList from './components/Book/BookList';

function BookApp() {
  
const [books, setBooks] = useState ([]);

const fetchBooks = async () =>{
  const response= await axios.get('http://localhost:3001/books');
  setBooks(response.data)
}

useEffect(() =>{
  fetchBooks();
}, []);

const createBook = async (title) =>  {
  const response= await axios.post('http://localhost:3001/books',{
    title
  } );
  setBooks([...books, response.data])
}

const editBook = async (id, newTitle) =>{
  const response = await axios.put(`http://localhost:3001/books/${id}`, {title: newTitle
  });

  const updateBook = books.map((book) =>
  book.id === id ? {...book, ...response.data}: book);
  setBooks(updateBook);
}

const deleteBookById = async (id) => {
  await axios.delete(`http://localhost:3001/books/${id}`);
  const deleteBook = books.filter((book) =>{
    return book.id !== id; 
  });
  setBooks(deleteBook);
}
  
  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookCreate onCreate={createBook} />
      <BookList books={books} onEdit={editBook} onDelete={deleteBookById}/>
    </div>
  );
}

export default BookApp;
