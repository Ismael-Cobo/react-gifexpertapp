import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setcategories}) => {
    
    const [inputValue, setinputValue] = useState('') 
    // ponerle las comillas al useState porque si no será siempre un undefined
    // y cuandoi intentes cambiar el valor petará                                                

    const handleInputValue = (e) => {
        // Cada vez que cambies el valor del input lo has de modificar 
        // en el useState
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(inputValue.trim().length > 2){
            setcategories(category => [inputValue,...category])
            setinputValue('')
            console.log('Submit hecho')
        }
    }

    return (
        
        <form onSubmit = {handleSubmit}>
            <input 
                type = "text"
                value = { inputValue }
                onChange = { handleInputValue }
            />
        </form>
        
    )
}


AddCategory.protoTypes = {
    setcategories : PropTypes.func.isRequired
}

