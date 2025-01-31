import { useState } from "react"


const AddCategory = ({onNewValue}) => {


    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ( {target} ) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
      event.preventDefault();
      if (inputValue.trim().length <= 1) return;
      //setCategories( categories => [inputValue, ...categories]);
      onNewValue( inputValue.trim() );
      setInputValue('')
    }

  return (
    <form onSubmit={  onSubmit }>
          <input 
            type="text" 
            placeholder="Buscar Gif"
            value={inputValue}
            onChange={onInputChange}
          />
    </form>
  )
}

export default AddCategory
