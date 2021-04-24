import React, {useState} from 'react'

export const AddCategory = () => {
  //Necesito saber lo que la persona está escribiendo en todo momento,
  //para eso el useSate, en este caso inputValue tendrá el texto que quiero
  const [inputValue, setInputValue] = useState('Nueva categoria');
  const handleInput = (e) => {
    setInputValue( e.target.value );
  }
  //Ahora quiero controlar cuando la persona hace enter
  const handleSubmit = (e) =>{
    e.preventDefault(); //Prevenir el refresco del navegador, eso ya no se usa!
    console.log('Submit hecho!');
  }
  return (
    <form onSubmit={handleSubmit}>
      <h4>{inputValue}</h4>
      <input type="text" value={inputValue} onChange={handleInput} />
    </form>
  )
}
