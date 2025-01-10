
import { useState } from 'react';
import './App.css';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import ProfileCard from './components/ProfileCard';
import EventHandling from './components/EventHandling';
import BookCreate from './components/Book/BookCreate';
import BookList from './components/Book/BookList';

function App() {
  // const [images, setImages]= useState([]);

  // const onSearchSubmit = async (term) => {
  //   const response = await axios.get('https://api.unsplash.com/search/photos',{
  //     params: { query: term },
  //     headers: {
  //       Authorization: `Client-ID DHvq2keX8WHiNkMh7X6SET7TzOjQM4e3zIs9iMNPynU`
  //     },
  //   });
  //   setImages(response.data.results);
  // } 

  
  const [books, setBooks] = useState([]);


  const createBook = (title) => {
    const newBook = { id: Math.random().toString(36).substr(2, 9), title };
    setBooks([...books, newBook]);
  };

  const editBook = (id, newTitle) => {
    const updatedBooks = books.map((book) =>
      book.id === id ? { ...book, title: newTitle } : book
    );
    setBooks(updatedBooks);
  };
  
  return (
    <div className="App">
      {/* <ProfileCard title="Alam" handle="@tanjeem"/>
      <EventHandling/>
      <SearchBar onSubmit={onSearchSubmit} />
      <ImageList images={images}/> */}
      <BookCreate onCreate={createBook}/>
      <BookList books={books} onEdit={editBook} />
    </div>
  );
}

export default App;
