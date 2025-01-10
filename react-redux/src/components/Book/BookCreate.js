import React, { useState } from 'react'

const BookCreate = ({onCreate}) => {
const [ title, setTitle] =useState('');
const handleSubmit= (e) =>{
    e.preventDefault();
    if(title.trim()){
        onCreate(title);
        setTitle('')
    }
}
    return (
        <div>
        <form onSubmit={handleSubmit}>
          <label>Add a Book</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter book title"
          />
          <button type="submit">Create</button>
        </form>
      </div>
  )
}

export default BookCreate