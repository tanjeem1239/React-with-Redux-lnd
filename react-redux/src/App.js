
import { useState } from 'react';
import './App.css';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

function App() {
  const [images, setImages]= useState([]);

  const onSearchSubmit = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos',{
      params: { query: term },
      headers: {
        Authorization: `Client-ID DHvq2keX8WHiNkMh7X6SET7TzOjQM4e3zIs9iMNPynU`
      },
    });
    setImages(response.data.results);
  } 
  return (
    <div className="App">
      <SearchBar onSubmit={onSearchSubmit} />
      <ImageList images={images}/>
    </div>
  );
}

export default App;
