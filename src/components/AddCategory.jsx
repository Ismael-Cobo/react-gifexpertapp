import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('')
    
    const handleInputCahnge = ({target}) => {
        setInputValue(target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(inputValue.trim().length > 2) {
            setCategories( category => [inputValue, ...category])
            setInputValue('')
        }
    }

    return (
        <form 
            className='gif__añadir_categoria'
            onSubmit={handleSubmit}
        >
            <input type="text" value={inputValue} onChange={handleInputCahnge}/>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}