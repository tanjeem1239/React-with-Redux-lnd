import React, { useState } from 'react'

const BookShow = ({book, onEdit}) => {
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
  return (
    <div>
        {isEditing ? (
            <div>
                <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}/>
                <button onClick={handleSave}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
                </div>

        ) : (
            <div>
            <h3>{book.title}</h3>
            <button onClick={handleEdit}>Edit</button>
        </div>
        )}

    </div>
  )
}

export default BookShow