import React from 'react'

const ImageShow = ({image}) => {
  return (
    <div>
        <img
        src={image.urls.small}
        alt={image.description}
        style={{ width: '100%', borderRadius: '8px' }}
        />
    </div>
  )
}

export default ImageShow;