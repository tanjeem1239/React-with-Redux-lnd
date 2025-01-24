
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
import Dropdown from './components/Dropdown';

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
  const [ selected, setIsSelected] = useState(null);

  const handleSelect = (dropOption) => {
    setIsSelected(dropOption)
  }
  const dropOptions = [
    { label: 'Red' , value : 'red'},
    { label: 'Green' , value : 'green'},
    { label: 'Blue' , value : 'blue'},
  ]
  
  return (
    <div className="App">
      {/* <ProfileCard title="Alam" handle="@tanjeem"/>
      <EventHandling/>
      <SearchBar onSubmit={onSearchSubmit} />
      <ImageList images={images}/> */}
      <div className="flex">

        <Dropdown dropOptions={dropOptions} handleSelect={handleSelect} selected={selected}/>

      </div>

    </div>
  );
}

export default App;
