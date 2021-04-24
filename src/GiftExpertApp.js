import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';

export const GiftExpertApp = () => {
  //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

  const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);
  
  const handleAdd = () => {
    const newcateg = [...categories, 'HunterXHunter']; //['HunterXHunter', ...categories]
    //setCategories(newcateg); //funciona, pero mejor la siguente
    setCategories( cats => newcateg ); //Recibe newcateg como un callback cats
    //Leerlo como el estado anterior cats pasa al nuevo estado newcateg
  }

  return (
    <div>
      <h2>GiftExpertApp</h2>
      <AddCategory />
      <hr/>
      <button onClick={handleAdd}>Agregar</button>
      <ol>
        { categories.map(cat => {
            return <li key={cat}>{cat}</li>
          })
        }
      </ol>
    </div>
  )
}
