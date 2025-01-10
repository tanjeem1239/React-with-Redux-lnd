import React, { useState } from 'react'

const EventHandling = () => {
    const [count, SetCount] = useState(0);
    const handleClick = () => {
        SetCount(count + 1);
    }
  return (
    <div>
        <button onClick={handleClick}> {count}</button>
    </div>
  )
}

export default EventHandling