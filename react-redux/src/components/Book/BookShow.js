import React, { useState } from 'react'

const BookShow = ({book, onEdit, onDelete}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle]= useState(book.title);

    const handleEdit = () => {
        setIsEditing(true);
    }

    const handleSave = () =>{
        onEdit(book.id,newTitle );
        setIsEditing(false);
    }

    const handleCancel = () => {
        setNewTitle( book.title);
        setIsEditing(false);
    }

    const handleDelete = () =>{
        onDelete(book.id);
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