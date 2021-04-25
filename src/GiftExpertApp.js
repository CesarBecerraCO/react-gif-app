import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(['Electricity']);
  return (
    <div>
      <h2>Gif Expert App</h2>
      <AddCategory setCategories={setCategories}/><hr/>
      <ol>
        { categories.map(cat => (<GifGrid key={cat} category={cat} />)) }
      </ol>
    </div>
  )
}
