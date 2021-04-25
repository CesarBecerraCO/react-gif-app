import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifList';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( {category} ) => {
  //Custom Hook
  const { data:images, loading } = useFetchGifs( category ); 

  return (
    <>
    <h3 className="animate__animated animate__fadeIn">{category}</h3>
    {loading && <p className="animate__animated animate__flash">Cargando resultados...</p>}
    <div className="card-grid">
      { images.map(gif => <GifGridItem key={gif.id} {...gif} />) }
    </div>
    </>
  )
}
