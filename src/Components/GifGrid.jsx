import React, { useEffect, useState } from 'react'
import GifItem from './GifItem';
import useFetchGif from '../hooks/useFetchGif';


const GifGrid = ({ category }) => {
    
  const { images, isLoading} = useFetchGif(category);

  return (
    <div>
      <h3>{category}</h3>
      {
        isLoading && ( <h2>cargando...</h2>)
      }


      <div className='card-grid'>
        {
          images.map( (image) => (
            <GifItem 
              key={image.id}
              { ...image }
              />
          ))
        }
      </div>
    </div>
  )
}

export default GifGrid
