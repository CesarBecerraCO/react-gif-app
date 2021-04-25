import React, {useState} from 'react'
import PropTypes from "prop-types";

export const AddCategory = ({setCategories}) => {
  const [inputValue, setInputValue] = useState('Samuray X');
  const handleInput = (e) => { //***** Handle *****
    setInputValue( e.target.value );
  }
  const handleSubmit = (e) =>{ //***** Handle *****
    e.preventDefault(); //Prevenir el refresco del navegador
    if ( inputValue.trim().length > 2 ) {
      setCategories( cats => [inputValue, ...cats] );
      setInputValue('');
      console.log('Submit hecho!');
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInput} />
    </form>
  )
}

AddCategory.propTypes = { //Exigir setCategories como función!!!
  setCategories: PropTypes.func.isRequired,
}