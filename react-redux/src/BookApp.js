
import { useEffect, useContext } from 'react';
import './App.css';
import BookCreate from './components/Book/BookCreate';
import BookList from './components/Book/BookList';
import BooksContext from './context/books';

function BookApp() {

  const {fetchBooks}= useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <div classNasme="app">
      <h1>Reading List</h1>
        <BookCreate />
        <BookList />
    </div>
  );
}

export default BookApp;
