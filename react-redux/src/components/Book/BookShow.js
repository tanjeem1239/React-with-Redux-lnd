import React, { useState } from 'react';
import useBooksContext from '../../hooks/use-books-context';

const BookShow = ({book}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle]= useState(book.title);
    
    const {deleteBookById, editBook} = useBooksContext();;

    const handleEdit = () => {
        setIsEditing(true);
    }

    const handleSave = async () =>{
        await editBook( book.id, newTitle);
        setIsEditing(false);
    }

    const handleCancel = () => {
        setNewTitle( book.title);
        setIsEditing(false);
    }

    const handleDelete = () =>{
        deleteBookById(book.id);
    }
  return (
    <div>
        {isEditing ? (
            <div className='book-show'>
                <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}/>
                    <button onClick={handleSave} className='save'>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                </div>

        ) : (
            <div className='book-show'>
                <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="" />
                <h3>{book.title}</h3>
                <div className='actions'>
                    <button className='delete' onClick={handleDelete}>Delete</button>
                    <button className='edit' onClick={handleEdit}>Edit</button>
                </div>
            </div>
        )}

    </div>
  )
}

export default BookShow