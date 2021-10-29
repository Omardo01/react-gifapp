import React, {useState}from 'react'
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';



export const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e) => {
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(inputValue.trim().length > 2){
            setCategories(cats => [inputValue, ...cats]);
            setinputValue ('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>AddCategory</h2>
            <TextField id="outlined-basic" label="Ingresa categoria" variant="outlined" value={inputValue} onChange={handleInputChange}/>
        </form>
    )
}

AddCategory.prototype = {
    setCategories: PropTypes.func.isRequired
}