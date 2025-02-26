
import { useState } from 'react';
import './App.css';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import ProfileCard from './components/ProfileCard';
import EventHandling from './components/EventHandling';
import BookCreate from './components/Book/BookCreate';
import BookList from './components/Book/BookList';
import Button from './components/Button';
import Route from './components/Route';
import DropdownPage from './pages/DropdownPage';

import Link from './components/Link';
import Sidebar from './components/Sidebar';
import ButtonPage from './pages/ButtonPage';
import ModalPage from './pages/ModalPage';
import TablePage from './pages/TablePage';

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
  
  return (
    <div className="App">
      {/* <ProfileCard title="Alam" handle="@tanjeem"/>
      <EventHandling/>
      <SearchBar onSubmit={onSearchSubmit} />
      <ImageList images={images}/> */}



        <Sidebar/>
        <div>
          <Route path="/dropdown">
            <DropdownPage/>
          </Route>
          <Route path="/button">
            <ButtonPage/>
          </Route>
          <Route path="/modal">
            <ModalPage/>
          </Route>
          <Route path="/table">
            <TablePage/>
          </Route>
        </div>
    </div>
  );
}

export default App;
