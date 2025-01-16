import React, { useState } from 'react'

const BookCreate = ({onCreate}) => {
const [ title, setTitle] =useState('');
const handleSubmit= (e) =>{
    e.preventDefault();
        onCreate(title);
        setTitle('');
}
    return (
        <div className="book-create">
          <h3  className=''>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <label>Add a Book</label>
          <input
            type="text"
            className='input'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter book title"
          />
          <button type="submit" className='button'>Create</button>
        </form>
      </div>
  )
}

export default BookCreate