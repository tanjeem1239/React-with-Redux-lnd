import React, { useState } from 'react'

const SearchBar = ({ onSubmit }) => {

    const [term, setTerm] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(term); 
    };
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Image Search</label>
                <input type="text"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                placeholder='Search for images..' />
            </div>
        </form>
    </div>
  )
}

export default SearchBar